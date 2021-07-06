import { Injectable } from '@nestjs/common';
import User from './User.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository) {}

  createUser(userDto): Promise<User> {
    return this.userRepository.createUser(userDto);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
