import { TestBed, inject } from '@angular/core/testing';

import { RevenueCompareService } from './revenue-compare.service';

describe('RevenueCompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueCompareService]
    });
  });

  it('should be created', inject([RevenueCompareService], (service: RevenueCompareService) => {
    expect(service).toBeTruthy();
  }));
});
