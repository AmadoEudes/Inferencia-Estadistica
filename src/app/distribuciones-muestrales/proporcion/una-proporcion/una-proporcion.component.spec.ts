import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaProporcionComponent } from './una-proporcion.component';

describe('UnaProporcionComponent', () => {
  let component: UnaProporcionComponent;
  let fixture: ComponentFixture<UnaProporcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnaProporcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaProporcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
