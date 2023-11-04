import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Dtos/createUser.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Duplicated User.' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Json structure for user object',
  })
  @Post('')
  async createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }
}
