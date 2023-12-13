import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './schema/user.schema';
import { CreateUserDto } from './Dtos/createUser.dto';
import { generateStrongPassword } from 'src/utils/generateStrongPassword.utils';
import { DuplicateUserException } from 'src/exceptions/duplicateUser.exception';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userRepo: Model<User>) {}

  async createUser(userData: CreateUserDto) {
    const generatedPassword = generateStrongPassword(18);
    try {
      const createdUser = await this.userRepo.create({
        ...userData,
        password: generatedPassword,
      });

      return {
        message: 'User successfully created.',
        data: { name: createdUser.name },
      };
    } catch (error) {
      switch (error.code) {
        case 11000:
          if (error.keyPattern.name) {
            throw new DuplicateUserException(
              `User with name - ${error.keyValue.name} already exists!`,
            );
          } else {
            throw new DuplicateUserException(
              `User with email - ${error.keyValue.email} already exists!`,
            );
          }

        default:
          throw new Error(error);
      }
    }
  }
  async findByName(name: string) {
    const user = await this.userRepo.findOne({ name });
    if (!user) {
      throw new BadRequestException();
    }

    return user;
  }
  async findById(id: string) {
    const user = await this.userRepo.findById(id);
    if (!user) {
      throw new BadRequestException();
    }

    return user;
  }
}
