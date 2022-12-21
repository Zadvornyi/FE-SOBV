import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvDashboardComponent } from './sobv-dashboard.component';

describe('SobvDashboardComponent', () => {
  let component: SobvDashboardComponent;
  let fixture: ComponentFixture<SobvDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
