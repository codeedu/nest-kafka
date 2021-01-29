import { Test, TestingModule } from '@nestjs/testing';
import { ValidaAlgumaCoisaController } from './valida-alguma-coisa.controller';

describe('ValidaAlgumaCoisaController', () => {
  let controller: ValidaAlgumaCoisaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidaAlgumaCoisaController],
    }).compile();

    controller = module.get<ValidaAlgumaCoisaController>(ValidaAlgumaCoisaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
