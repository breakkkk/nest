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
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'node:path/win32';
import { TransformInterceptor } from './interceptor/transform.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: ['.env.development', '.env.production'],
      load: [
        () => ({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '826722',
          database: 'nest_test',
          logging: true,
        }),
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt(process.env.PORT),
      username: 'root',
      password: '826722',
      database: 'nest_test',
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      migrations: ['src/migration/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
      // cli: {
      //   entitiesDir: 'src/',
      //   migrationsDir: 'src/migration',
      //   subscribersDir: 'src/subscriber',
      // },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
