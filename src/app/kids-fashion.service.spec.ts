import { TestBed } from '@angular/core/testing';

import { KidsFashionService } from './kids-fashion.service';

describe('KidsFashionService', () => {
  let service: KidsFashionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidsFashionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
