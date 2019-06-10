import { TestBed } from '@angular/core/testing';

import { RentedCarsServiceService } from './rented-cars-service.service';

describe('RentedCarsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentedCarsServiceService = TestBed.get(RentedCarsServiceService);
    expect(service).toBeTruthy();
  });
});
