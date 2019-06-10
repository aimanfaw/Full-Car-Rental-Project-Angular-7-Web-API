import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCarComponent } from './get-rented-car.component';


describe('GetCarComponent', () => {
  let component: GetCarComponent;
  let fixture: ComponentFixture<GetCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
