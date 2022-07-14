import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionFinitaComponent } from './poblacion-finita.component';

describe('PoblacionFinitaComponent', () => {
  let component: PoblacionFinitaComponent;
  let fixture: ComponentFixture<PoblacionFinitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoblacionFinitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoblacionFinitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
