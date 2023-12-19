/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:03:23
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 13:52:47
 * @FilePath: /nest-demo/src/app.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserModule } from './service/system/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { MenuModule } from './service/option/menu/menu.module';

const envFilePath = [__dirname + './env/.env'];

switch (process.env.NODE_ENV) {
  case 'development':
    envFilePath.unshift('.env.development');
    break;
  case 'production':
    envFilePath.unshift('.env.production');
    break;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFilePath,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_type as 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
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
    MenuModule,
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
