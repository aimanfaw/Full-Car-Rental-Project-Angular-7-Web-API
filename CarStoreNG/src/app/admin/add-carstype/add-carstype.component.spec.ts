import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarstypeComponent } from './add-carstype.component';

describe('AddCarstypeComponent', () => {
  let component: AddCarstypeComponent;
  let fixture: ComponentFixture<AddCarstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
