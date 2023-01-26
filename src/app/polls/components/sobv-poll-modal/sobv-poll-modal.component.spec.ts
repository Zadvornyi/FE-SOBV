import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPollModalComponent } from './sobv-poll-modal.component';

describe('SobvPollModalComponent', () => {
  let component: SobvPollModalComponent;
  let fixture: ComponentFixture<SobvPollModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPollModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvPollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
