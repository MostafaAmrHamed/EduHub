import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { Request } from 'express';
import { HydratedDocument } from 'mongoose';
import { User } from '../user/schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: Request) {
    const user = req.user as HydratedDocument<User>;
    return this.authService.login(user);
  }
}
