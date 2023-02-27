import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvSubHeaderComponent } from './sobv-sub-header.component';

describe('SobvSubHeaderComponent', () => {
  let component: SobvSubHeaderComponent;
  let fixture: ComponentFixture<SobvSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvSubHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
