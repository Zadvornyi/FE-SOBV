import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SobvComponent } from './sobv.component';

describe('SobvComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SobvComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SobvComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sobv'`, () => {
    const fixture = TestBed.createComponent(SobvComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sobv');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SobvComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('sobv app is running!');
  });
});
