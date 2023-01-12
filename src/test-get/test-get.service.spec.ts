import { Test, TestingModule } from '@nestjs/testing';
import { TestGetService } from './test-get.service';

describe('TestGetService', () => {
  let service: TestGetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGetService],
    }).compile();

    service = module.get<TestGetService>(TestGetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
