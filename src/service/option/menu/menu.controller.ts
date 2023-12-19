import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MenuService } from './menu.service';
import { MenuEntity } from './entitys/menu.entity';
import { SaveMenuDto } from './dto/SaveMenuDto';

@Controller('menu')
export class MenuController {
  constructor(
    private configService: ConfigService,
    private menuService: MenuService,
  ) {}

  @Post('SaveMenu')
  @HttpCode(200)
  SaveMenu(@Body() data: SaveMenuDto): Promise<MenuEntity> {
    return this.menuService.SaveMenu(data);
  }

  @Get('QueryAllMenu')
  QueryAllMenu(): Promise<MenuEntity[]> {
    return this.menuService.QueryAll();
  }
}
