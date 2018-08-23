import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell2Component } from './cell2.component';

describe('Cell2Component', () => {
  let component: Cell2Component;
  let fixture: ComponentFixture<Cell2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cell2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
