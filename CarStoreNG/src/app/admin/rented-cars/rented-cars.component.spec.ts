import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedCarsComponent } from './rented-cars.component';

describe('RentedCarsComponent', () => {
  let component: RentedCarsComponent;
  let fixture: ComponentFixture<RentedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
