import { ApiProperty } from '@nestjs/swagger';

export class ApiResponse<T> {
  @ApiProperty()
  data: T;

  @ApiProperty({
    example: 200,
  })
  code: number;

  @ApiProperty({
    example: 'success',
  })
  message?: string;

  constructor(data: T, code: number, message?: string) {
    this.data = data;
    this.code = code;
    this.message = message;
  }
}
