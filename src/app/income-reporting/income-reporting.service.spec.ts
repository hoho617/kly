import { TestBed, inject } from '@angular/core/testing';

import { IncomeReportingService } from './income-reporting.service';

describe('IncomeReportingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeReportingService]
    });
  });

  it('should be created', inject([IncomeReportingService], (service: IncomeReportingService) => {
    expect(service).toBeTruthy();
  }));
});
