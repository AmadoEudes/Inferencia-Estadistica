import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasRecomendadasComponent } from './paginas-recomendadas.component';

describe('PaginasRecomendadasComponent', () => {
  let component: PaginasRecomendadasComponent;
  let fixture: ComponentFixture<PaginasRecomendadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginasRecomendadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasRecomendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
