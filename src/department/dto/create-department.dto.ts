import {ApiProperty} from '@nestjs/swagger'

export class CreateDepartmentDto {
  @ApiProperty({example: 'Department name'})
  readonly name: string

  @ApiProperty({example: 'Description department'})
  readonly description: string

  @ApiProperty({example: ['userID1', 'userId1']})
  readonly users: number[]
}
