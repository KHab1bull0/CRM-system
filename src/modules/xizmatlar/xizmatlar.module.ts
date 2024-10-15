import { Module } from '@nestjs/common';
import { XizmatlarService } from './xizmatlar.service';
import { XizmatlarController } from './xizmatlar.controller';

@Module({
  controllers: [XizmatlarController],
  providers: [XizmatlarService],
})
export class XizmatlarModule {}
