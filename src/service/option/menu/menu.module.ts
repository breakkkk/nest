import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuEntity } from './entitys/menu.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
