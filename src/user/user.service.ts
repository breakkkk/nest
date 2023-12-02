/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:10:56
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 13:24:03
 * @FilePath: /nest-demo/src/user/user.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { IUser } from './types';

@Injectable()
export class UserService {
  GetUserInfo(): IUser.UserInfo {
    return {
      name: '章三q  232',
    };
  }
}
