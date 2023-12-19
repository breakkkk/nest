/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:10:39
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 13:52:31
 * @FilePath: /nest-demo/src/user/user.controller.ts
 * @Description:
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { UserEntity, UserEntityDataType } from './entitys/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {}

  @Get('getUser')
  GetUserInfo() {
    return this.userService.GetUserInfo();
  }

  @Get('QueryUserList')
  async QueryUserList(): Promise<UserEntity[]> {
    return await this.userService.QueryList();
  }

  @Post('createUser')
  async createUser(@Body() data: UserEntityDataType): Promise<UserEntity> {
    return await this.userService.CreateUser(data);
  }
}
