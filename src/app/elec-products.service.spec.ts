import { TestBed } from '@angular/core/testing';

import { ElecProductsService } from './elec-products.service';

describe('ElecProductsService', () => {
  let service: ElecProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElecProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
