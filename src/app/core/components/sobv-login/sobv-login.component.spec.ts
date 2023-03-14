import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvLoginComponent } from './sobv-login.component';

describe('SobvLoginComponent', () => {
  let component: SobvLoginComponent;
  let fixture: ComponentFixture<SobvLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
