import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({})
export class UserModule {
  exports: [];
  controllers: [UserController];
  providers: [UserService];
}
