import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCarsComponent } from './check-cars.component';

describe('CheckCarsComponent', () => {
  let component: CheckCarsComponent;
  let fixture: ComponentFixture<CheckCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
