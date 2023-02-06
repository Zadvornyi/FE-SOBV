import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPollChoicesComponent } from './sobv-poll-choices.component';

describe('SobvPollChoicesComponent', () => {
  let component: SobvPollChoicesComponent;
  let fixture: ComponentFixture<SobvPollChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPollChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvPollChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
