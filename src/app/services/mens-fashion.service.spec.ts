import { TestBed } from '@angular/core/testing';

import { MensFashionService } from './mens-fashion.service';

describe('MensFashionService', () => {
  let service: MensFashionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensFashionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
