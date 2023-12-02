/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:10:39
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 13:52:31
 * @FilePath: /nest-demo/src/user/user.controller.ts
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('getUser')
  GetUserInfo() {
    return this.userService.GetUserInfo();
  }
}
