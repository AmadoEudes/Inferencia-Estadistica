import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaVarianzaComponent } from './una-varianza.component';

describe('UnaVarianzaComponent', () => {
  let component: UnaVarianzaComponent;
  let fixture: ComponentFixture<UnaVarianzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaVarianzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaVarianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
