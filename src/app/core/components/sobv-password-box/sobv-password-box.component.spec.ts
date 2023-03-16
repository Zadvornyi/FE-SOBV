import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPasswordBoxComponent } from './sobv-password-box.component';

describe('SobvPasswordBoxComponent', () => {
  let component: SobvPasswordBoxComponent;
  let fixture: ComponentFixture<SobvPasswordBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPasswordBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvPasswordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
