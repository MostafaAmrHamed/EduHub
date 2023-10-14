import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/schema/user.schema';
import { HydratedDocument } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findByName(username);
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (user && isCorrectPassword) {
      return user;
    }
    return null;
  }

  async login(user: HydratedDocument<User>) {
    const payload = { username: user.name, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
