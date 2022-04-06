import {ApiProperty} from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({example: 'test@test.ts'})
  readonly email: string

  @ApiProperty({example: '123456'})
  readonly password: string
}
