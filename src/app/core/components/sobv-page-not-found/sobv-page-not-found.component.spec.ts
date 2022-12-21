import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvPageNotFoundComponent } from './sobv-page-not-found.component';

describe('SobvPageNotFoundComponent', () => {
  let component: SobvPageNotFoundComponent;
  let fixture: ComponentFixture<SobvPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobvPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
