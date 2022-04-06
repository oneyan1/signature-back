import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/sequelize'
import {CreateUserDto} from './dto/create-user.dto'
import {User} from './users.model'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepositiry: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepositiry.create(dto)
    return user
  }

  async getUsers() {
    const users = await this.userRepositiry.findAll()
    return users
  }

  async getUserByEmail(email: string) {
    return await this.userRepositiry.findOne({where: {email}})
  }
}
