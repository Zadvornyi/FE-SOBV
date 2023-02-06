import { TestBed } from '@angular/core/testing';

import { SobvPollsService } from './sobv-polls.service';

describe('SobvPollsService', () => {
  let service: SobvPollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobvPollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
