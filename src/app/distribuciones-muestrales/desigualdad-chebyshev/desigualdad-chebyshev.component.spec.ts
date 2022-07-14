import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigualdadChebyshevComponent } from './desigualdad-chebyshev.component';

describe('DesigualdadChebyshevComponent', () => {
  let component: DesigualdadChebyshevComponent;
  let fixture: ComponentFixture<DesigualdadChebyshevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesigualdadChebyshevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesigualdadChebyshevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
