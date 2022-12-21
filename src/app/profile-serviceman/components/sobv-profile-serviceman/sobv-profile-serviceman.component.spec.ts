import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvProfileServicemanComponent } from './sobv-profile-serviceman.component';

describe('SobvProfileServicemanComponent', () => {
  let component: SobvProfileServicemanComponent;
  let fixture: ComponentFixture<SobvProfileServicemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvProfileServicemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobvProfileServicemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
