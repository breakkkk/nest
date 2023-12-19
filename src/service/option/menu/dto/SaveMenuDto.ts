import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SaveMenuDto {
  id?: number;

  @IsNotEmpty({ message: '菜单名称不可为空' })
  @IsString()
  @MaxLength(20, {
    message: '菜单名称不得大于20',
  })
  name: string;

  @IsString()
  schema: string;
}
