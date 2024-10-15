import { Injectable } from '@nestjs/common';
import { CreateXizmatlarDto } from './dto/create-xizmatlar.dto';
import { UpdateXizmatlarDto } from './dto/update-xizmatlar.dto';

@Injectable()
export class XizmatlarService {
  create(createXizmatlarDto: CreateXizmatlarDto) {
    return 'This action adds a new xizmatlar';
  }

  findAll() {
    return `This action returns all xizmatlar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} xizmatlar`;
  }

  update(id: number, updateXizmatlarDto: UpdateXizmatlarDto) {
    return `This action updates a #${id} xizmatlar`;
  }

  remove(id: number) {
    return `This action removes a #${id} xizmatlar`;
  }
}
