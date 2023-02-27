import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPollModalPopupComponent } from './sobv-poll-modal-popup.component';

describe('SobvPollModalPopupComponent', () => {
  let component: SobvPollModalPopupComponent;
  let fixture: ComponentFixture<SobvPollModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPollModalPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvPollModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
