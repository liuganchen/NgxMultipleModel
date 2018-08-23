import { Tree2Module } from './tree2.module';

describe('Tree2Module', () => {
  let tree2Module: Tree2Module;

  beforeEach(() => {
    tree2Module = new Tree2Module();
  });

  it('should create an instance', () => {
    expect(tree2Module).toBeTruthy();
  });
});
