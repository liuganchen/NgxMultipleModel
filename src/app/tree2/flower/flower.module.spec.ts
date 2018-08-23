import { FlowerModule } from './flower.module';

describe('FlowerModule', () => {
  let flowerModule: FlowerModule;

  beforeEach(() => {
    flowerModule = new FlowerModule();
  });

  it('should create an instance', () => {
    expect(flowerModule).toBeTruthy();
  });
});
