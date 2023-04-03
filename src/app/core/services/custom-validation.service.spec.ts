import { TestBed } from '@angular/core/testing';

import { CustomValidationService } from './custom-validation';

describe('CustomValidationService', () => {
  let service: CustomValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
