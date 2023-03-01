import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvCreatePlatoonComponent } from './sobv-create-platoon.component';

describe('SobvCreatePlatoonComponent', () => {
  let component: SobvCreatePlatoonComponent;
  let fixture: ComponentFixture<SobvCreatePlatoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvCreatePlatoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvCreatePlatoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
