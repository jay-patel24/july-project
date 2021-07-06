import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './Dto/user.dto';
import User from './User.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUser(@Body() userDto: UserDto): Promise<User> {
    return this.userService.createUser(UserDto);
  }

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
