import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './schema/user.schema';
import { CreateUserDto } from './Dtos/createUser.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userRepo: Model<User>) {}

  async createUser(userData: CreateUserDto) {
    const createdUser = this.userRepo.create(userData);
    if (!createdUser) {
      throw new Error('Something went wrong');
    }
    return {
      data: 'User Created',
    };
  }
}
