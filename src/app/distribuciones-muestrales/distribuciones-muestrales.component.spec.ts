import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionesMuestralesComponent } from './distribuciones-muestrales.component';

describe('DistribucionesMuestralesComponent', () => {
  let component: DistribucionesMuestralesComponent;
  let fixture: ComponentFixture<DistribucionesMuestralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionesMuestralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionesMuestralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
