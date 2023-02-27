import { TestBed } from '@angular/core/testing';

import { SobvPollQuestionsFormService } from './sobv-poll-questions-form.service';

describe('SobvPollQuestionsFormService', () => {
  let service: SobvPollQuestionsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobvPollQuestionsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
