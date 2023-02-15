import { TestBed } from '@angular/core/testing';

import { SalesManService } from './sales-man.service';

describe('SalesManService', () => {
  let service: SalesManService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesManService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
