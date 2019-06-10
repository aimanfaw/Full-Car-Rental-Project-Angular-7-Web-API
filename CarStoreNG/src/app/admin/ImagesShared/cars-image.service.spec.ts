import { TestBed } from '@angular/core/testing';

import { CarsImageService } from './cars-image.service';

describe('CarsImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsImageService = TestBed.get(CarsImageService);
    expect(service).toBeTruthy();
  });
});
