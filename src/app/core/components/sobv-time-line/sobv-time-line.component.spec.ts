import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvTimeLineComponent } from './sobv-time-line.component';

describe('SobvTimeLineComponent', () => {
  let component: SobvTimeLineComponent;
  let fixture: ComponentFixture<SobvTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
