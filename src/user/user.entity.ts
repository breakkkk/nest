import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeepPartial,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '用户id',
  })
  id: number;

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

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: '更新时间',
  })
  updateAt: Date;
}

export type UserEntityDataType = DeepPartial<UserEntity>;