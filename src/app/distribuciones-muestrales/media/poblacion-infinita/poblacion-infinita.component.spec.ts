import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionInfinitaComponent } from './poblacion-infinita.component';

describe('PoblacionInfinitaComponent', () => {
  let component: PoblacionInfinitaComponent;
  let fixture: ComponentFixture<PoblacionInfinitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoblacionInfinitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoblacionInfinitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
