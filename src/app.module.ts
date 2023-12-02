/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:03:23
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 13:52:47
 * @FilePath: /nest-demo/src/app.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: parseInt(process.env.PORT),
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
