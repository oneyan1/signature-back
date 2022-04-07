import {forwardRef, Module} from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'
import {AuthModule} from 'src/auth/auth.module'
import {Department} from 'src/department/department.model'
import {UsersController} from './users.controller'
import {User} from './users.model'
import {UsersService} from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Department]), forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
