import { Test, TestingModule } from '@nestjs/testing';
import { XizmatlarService } from './xizmatlar.service';

describe('XizmatlarService', () => {
  let service: XizmatlarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XizmatlarService],
    }).compile();

    service = module.get<XizmatlarService>(XizmatlarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
