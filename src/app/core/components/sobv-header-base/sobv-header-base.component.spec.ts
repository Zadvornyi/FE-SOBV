import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvHeaderBaseComponent } from './sobv-header-base.component';

describe('SobvHeaderBaseComponent', () => {
  let component: SobvHeaderBaseComponent;
  let fixture: ComponentFixture<SobvHeaderBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvHeaderBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvHeaderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
