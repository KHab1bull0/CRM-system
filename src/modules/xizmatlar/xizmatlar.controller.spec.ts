import { Test, TestingModule } from '@nestjs/testing';
import { XizmatlarController } from './xizmatlar.controller';
import { XizmatlarService } from './xizmatlar.service';

describe('XizmatlarController', () => {
  let controller: XizmatlarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XizmatlarController],
      providers: [XizmatlarService],
    }).compile();

    controller = module.get<XizmatlarController>(XizmatlarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
