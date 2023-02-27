import { TestBed } from '@angular/core/testing';

import { SobvProfileServicemanService } from './sobv-profile-serviceman.service';

describe('SobvProfileServicemanService', () => {
  let service: SobvProfileServicemanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobvProfileServicemanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
