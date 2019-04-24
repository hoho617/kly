import { TestBed, inject } from '@angular/core/testing';
import {MonthRevenueService} from './month-revenue.service';


describe('IncomeReportingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthRevenueService]
    });
  });

  it('should be created', inject([MonthRevenueService], (service: MonthRevenueService) => {
    expect(service).toBeTruthy();
  }));
});
