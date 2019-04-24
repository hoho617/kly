import { TestBed, inject } from '@angular/core/testing';

import { RoomStatusService } from './room-status.service';

describe('RoomStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomStatusService]
    });
  });

  it('should be created', inject([RoomStatusService], (service: RoomStatusService) => {
    expect(service).toBeTruthy();
  }));
});
