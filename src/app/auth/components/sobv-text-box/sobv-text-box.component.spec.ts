import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvTextBoxComponent } from './sobv-text-box.component';

describe('SobvTextBoxComponent', () => {
  let component: SobvTextBoxComponent;
  let fixture: ComponentFixture<SobvTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
