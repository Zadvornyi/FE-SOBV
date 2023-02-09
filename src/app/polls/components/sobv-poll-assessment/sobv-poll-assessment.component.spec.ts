import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPollAssessmentComponent } from './sobv-poll-assessment.component';

describe('SobvPollAssessmentComponent', () => {
  let component: SobvPollAssessmentComponent;
  let fixture: ComponentFixture<SobvPollAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPollAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvPollAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
