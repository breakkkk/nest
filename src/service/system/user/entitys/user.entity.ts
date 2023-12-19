import { CommonEntity } from 'src/service/common/entitys/common.entity';
import { Column, DeepPartial, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends CommonEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
    name: 'username',
    comment: '用户名',
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    name: 'password',
    comment: '密码',
  })
  password: string;

  @Column('tinyint', {
    nullable: false,
    default: () => 0,
    name: 'is_del',
    comment: '是否删除,1表示删除,0表示正常',
  })
  isDel: number;
}

export type UserEntityDataType = DeepPartial<UserEntity>;
