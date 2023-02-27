import { TestBed } from '@angular/core/testing';

import { SobvRateScrollService } from './sobv-rate-scroll.service';

describe('SobvRateScrollService', () => {
  let service: SobvRateScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobvRateScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
