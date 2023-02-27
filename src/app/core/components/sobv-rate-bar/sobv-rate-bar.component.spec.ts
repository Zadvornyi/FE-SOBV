import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvRateBarComponent } from './sobv-rate-bar.component';

describe('SobvRateBarComponent', () => {
  let component: SobvRateBarComponent;
  let fixture: ComponentFixture<SobvRateBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvRateBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvRateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
