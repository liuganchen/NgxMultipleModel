import { Leaf2Module } from './leaf2.module';

describe('Leaf2Module', () => {
  let leaf2Module: Leaf2Module;

  beforeEach(() => {
    leaf2Module = new Leaf2Module();
  });

  it('should create an instance', () => {
    expect(leaf2Module).toBeTruthy();
  });
});
