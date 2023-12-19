/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:03:23
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 11:20:39
 * @FilePath: /nest-demo/src/main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/');
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
