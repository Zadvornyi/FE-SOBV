import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvRegisterComponent } from './sobv-register.component';

describe('SobvRegisterComponent', () => {
  let component: SobvRegisterComponent;
  let fixture: ComponentFixture<SobvRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
