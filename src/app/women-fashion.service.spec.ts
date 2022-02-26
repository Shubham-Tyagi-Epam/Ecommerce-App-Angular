import { TestBed } from '@angular/core/testing';

import { WomenFashionService } from './women-fashion.service';

describe('WomenFashionService', () => {
  let service: WomenFashionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenFashionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
