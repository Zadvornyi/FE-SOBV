import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPollQuestionsComponent } from './sobv-poll-questions.component';

describe('SobvPollQuestionsComponent', () => {
  let component: SobvPollQuestionsComponent;
  let fixture: ComponentFixture<SobvPollQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPollQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvPollQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
