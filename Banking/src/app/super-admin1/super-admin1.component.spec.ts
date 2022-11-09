import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdmin1Component } from './super-admin1.component';

describe('SuperAdmin1Component', () => {
  let component: SuperAdmin1Component;
  let fixture: ComponentFixture<SuperAdmin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdmin1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdmin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
