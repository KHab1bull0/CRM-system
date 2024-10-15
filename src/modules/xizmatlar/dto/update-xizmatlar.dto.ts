import { PartialType } from '@nestjs/mapped-types';
import { CreateXizmatlarDto } from './create-xizmatlar.dto';

export class UpdateXizmatlarDto extends PartialType(CreateXizmatlarDto) {}
