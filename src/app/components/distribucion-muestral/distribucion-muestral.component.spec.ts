import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionMuestralComponent } from './distribucion-muestral.component';

describe('DistribucionMuestralComponent', () => {
  let component: DistribucionMuestralComponent;
  let fixture: ComponentFixture<DistribucionMuestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionMuestralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionMuestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
