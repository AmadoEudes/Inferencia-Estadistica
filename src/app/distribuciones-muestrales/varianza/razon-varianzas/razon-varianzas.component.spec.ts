import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonVarianzasComponent } from './razon-varianzas.component';

describe('RazonVarianzasComponent', () => {
  let component: RazonVarianzasComponent;
  let fixture: ComponentFixture<RazonVarianzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazonVarianzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonVarianzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
