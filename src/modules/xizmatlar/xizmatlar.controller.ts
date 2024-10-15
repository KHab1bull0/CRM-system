import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { XizmatlarService } from './xizmatlar.service';
import { CreateXizmatlarDto } from './dto/create-xizmatlar.dto';
import { UpdateXizmatlarDto } from './dto/update-xizmatlar.dto';

@Controller('xizmatlar')
export class XizmatlarController {
  constructor(private readonly xizmatlarService: XizmatlarService) {}

  @Post()
  create(@Body() createXizmatlarDto: CreateXizmatlarDto) {
    return this.xizmatlarService.create(createXizmatlarDto);
  }

  @Get()
  findAll() {
    return this.xizmatlarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.xizmatlarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateXizmatlarDto: UpdateXizmatlarDto) {
    return this.xizmatlarService.update(+id, updateXizmatlarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.xizmatlarService.remove(+id);
  }
}
