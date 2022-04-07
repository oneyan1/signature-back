import {Module} from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'
import {User} from 'src/users/users.model'
import {DepartmentController} from './department.controller'
import {Department} from './department.model'
import {DepartmentService} from './department.service'

@Module({
  providers: [DepartmentService],
  controllers: [DepartmentController],
  imports: [SequelizeModule.forFeature([Department, User])],
  exports: [DepartmentService]
})
export class DepartmentModule {}
