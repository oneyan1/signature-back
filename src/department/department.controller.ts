import {Body, Controller, Get, Param, Post} from '@nestjs/common'
import {DepartmentService} from './department.service'
import {CreateDepartmentDto} from './dto/create-department.dto'

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Post()
  createDepartment(@Body() dto: CreateDepartmentDto) {
    return this.departmentService.create(dto)
  }

  @Get()
  getAllDepratments() {
    return this.departmentService.getAll()
  }

  @Get(':id')
  getDepartmentById(@Param('id') id: number | string ) {
      return this.departmentService.getById(id)
  }
}
