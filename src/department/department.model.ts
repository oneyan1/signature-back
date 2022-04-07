import {ApiOperation, ApiProperty} from '@nestjs/swagger'
import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript'
import { User } from 'src/users/users.model'

interface DepartmentCreationAttrs {
  name: string
  description: string
//   users: number[]
}

@Table({tableName: 'departments'})
export class Department extends Model<Department, DepartmentCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique indeficator'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'Department of True'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  name: string

  @ApiProperty({example: 'Department description'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string

  @HasMany(() => User)
  users: User[]
}
