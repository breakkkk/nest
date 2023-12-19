import { CommonEntity } from 'src/service/common/entitys/common.entity';
import { Column, DeepPartial, Entity } from 'typeorm';

@Entity({ name: 'route_menu' })
export class MenuEntity extends CommonEntity {
  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    comment: '用户配置的菜单名称',
  })
  name: string;

  @Column({
    type: 'longtext',
    nullable: true,
    comment: '菜单布局信息',
  })
  schema: string;
}

export type MenuEntityDataType = DeepPartial<MenuEntity>;
