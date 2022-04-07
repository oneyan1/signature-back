import {ApiProperty} from '@nestjs/swagger'
import {User} from 'src/users/users.model'

export class GetDepartmentDto {
  @ApiProperty({example: 'Department name'})
  readonly id: number

  @ApiProperty({example: 'Department name'})
  readonly name: string

  @ApiProperty({example: 'Description department'})
  readonly description: string

  @ApiProperty({example: ['userID1', 'userId1']})
  readonly users: User[]
}
