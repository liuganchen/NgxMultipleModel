import { LeafModule } from './leaf.module';

describe('LeafModule', () => {
  let leafModule: LeafModule;

  beforeEach(() => {
    leafModule = new LeafModule();
  });

  it('should create an instance', () => {
    expect(leafModule).toBeTruthy();
  });
});
