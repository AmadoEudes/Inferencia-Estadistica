import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaDeMediasComponent } from './diferencia-de-medias.component';

describe('DiferenciaDeMediasComponent', () => {
  let component: DiferenciaDeMediasComponent;
  let fixture: ComponentFixture<DiferenciaDeMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciaDeMediasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaDeMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
