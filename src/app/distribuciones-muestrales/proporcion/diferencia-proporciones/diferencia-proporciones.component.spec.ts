import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaProporcionesComponent } from './diferencia-proporciones.component';

describe('DiferenciaProporcionesComponent', () => {
  let component: DiferenciaProporcionesComponent;
  let fixture: ComponentFixture<DiferenciaProporcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciaProporcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaProporcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
