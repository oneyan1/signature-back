import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/sequelize'
import {User} from 'src/users/users.model'
import {Department} from './department.model'
import {CreateDepartmentDto} from './dto/create-department.dto'
import {GetDepartmentDto} from './dto/get-department.dto'

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department) private departmentRepository: typeof Department,
    @InjectModel(User) private userRepository: typeof User
  ) {}

  async create(dto: CreateDepartmentDto): Promise<Department> {
    try {
      const department = await this.departmentRepository.create({
        name: dto.name,
        description: dto.description,
      })
      if (dto.users) {
        for (let i = 0; i < dto.users.length; i++) {
          const user = await this.userRepository.findOne({where: {id: dto.users[i]}})
          user.departmentId = department.id
          await user.save()
        }
      }
      return department
    } catch (err) {
      throw new HttpException(err.parent.detail, HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }

  async getAll(): Promise<GetDepartmentDto[]> {
    const deptWithUserId: GetDepartmentDto[] = []
    const department = await this.departmentRepository.findAll()
    for (let i = 0; i < department.length; i++) {
      const users = await this.userRepository.findAll({where: {departmentId: department[i].id}})
      deptWithUserId.push({
        id: Number(department[i].id),
        name: department[i].name,
        description: department[i].description,
        users: [...users],
      })
    }
    return deptWithUserId
  }

  async getById(id: number | string): Promise<GetDepartmentDto> {
    const department = await this.departmentRepository.findOne({where: {id}})
    const deptWithUserId: GetDepartmentDto = {...department, users: []}
    return deptWithUserId
  }
}
