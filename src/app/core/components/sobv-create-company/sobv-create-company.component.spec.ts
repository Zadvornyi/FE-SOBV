import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobvCreateCompanyComponent } from './sobv-create-company.component';

describe('SobvCreateCompanyComponent', () => {
  let component: SobvCreateCompanyComponent;
  let fixture: ComponentFixture<SobvCreateCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobvCreateCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobvCreateCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
