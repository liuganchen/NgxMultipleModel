import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollenComponent } from './pollen.component';

describe('PollenComponent', () => {
  let component: PollenComponent;
  let fixture: ComponentFixture<PollenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
