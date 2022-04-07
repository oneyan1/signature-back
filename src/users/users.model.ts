import {ApiOperation, ApiProperty} from '@nestjs/swagger'
import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript'
import {Department} from 'src/department/department.model'

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique indeficator'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'test@test.ts'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @ApiProperty({example: '123456'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string

  @ApiProperty({example: 'John'})
  @Column({type: DataType.STRING, allowNull: true})
  name: string

  @ApiProperty({example: 'Doe'})
  @Column({type: DataType.STRING, allowNull: true})
  surname: string

  @ForeignKey(() => Department)
  @Column({type: DataType.INTEGER})
  departmentId: number

  @BelongsTo(() => Department)
  department: Department
}
