import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaMediasComponent } from './diferencia-medias.component';

describe('DiferenciaMediasComponent', () => {
  let component: DiferenciaMediasComponent;
  let fixture: ComponentFixture<DiferenciaMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciaMediasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
