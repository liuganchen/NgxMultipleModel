import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pollen2Component } from './pollen2.component';

describe('Pollen2Component', () => {
  let component: Pollen2Component;
  let fixture: ComponentFixture<Pollen2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pollen2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pollen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
