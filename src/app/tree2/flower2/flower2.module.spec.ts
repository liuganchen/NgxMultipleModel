import { Flower2Module } from './flower2.module';

describe('Flower2Module', () => {
  let flower2Module: Flower2Module;

  beforeEach(() => {
    flower2Module = new Flower2Module();
  });

  it('should create an instance', () => {
    expect(flower2Module).toBeTruthy();
  });
});
