import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvCreateServicemanComponent } from './sobv-create-serviceman.component';

describe('SobvCreateServicemanComponent', () => {
  let component: SobvCreateServicemanComponent;
  let fixture: ComponentFixture<SobvCreateServicemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvCreateServicemanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvCreateServicemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
