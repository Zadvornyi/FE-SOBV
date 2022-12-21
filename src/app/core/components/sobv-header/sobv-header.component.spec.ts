import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvHeaderComponent } from './sobv-header.component';

describe('SobvHeaderComponent', () => {
  let component: SobvHeaderComponent;
  let fixture: ComponentFixture<SobvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
