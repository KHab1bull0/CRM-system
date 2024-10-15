import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class EmployeeService {

  constructor(private prisma: PrismaService) { }
  async create(createEmployeeDto: CreateEmployeeDto) {

    const employee = await this.prisma.employee.create({
      data: createEmployeeDto,
    });

    return employee;
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
