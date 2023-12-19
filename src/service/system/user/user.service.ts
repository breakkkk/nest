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
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, UserEntityDataType } from './entitys/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async CreateUser(data: UserEntityDataType): Promise<UserEntity> {
    return await this.userRepository.save(data);
  }

  async QueryList(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  GetUserInfo(): IUser.UserInfo {
    return {
      name: '章三q  232',
    };
  }
}
