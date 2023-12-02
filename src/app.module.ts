/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:03:23
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 11:09:07
 * @FilePath: /nest-demo/src/app.module.ts
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
