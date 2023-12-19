import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from './entitys/menu.entity';
import { Repository } from 'typeorm';
import { SaveMenuDto } from './dto/SaveMenuDto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuResposity: Repository<MenuEntity>,
  ) {}

  async SaveMenu(data: SaveMenuDto): Promise<MenuEntity> {
    return await this.menuResposity.save(data);
  }

  async QueryAll(): Promise<MenuEntity[]> {
    return await this.menuResposity.find();
  }
}
