import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerenableComponent } from './customerenable.component';

describe('CustomerenableComponent', () => {
  let component: CustomerenableComponent;
  let fixture: ComponentFixture<CustomerenableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerenableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerenableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
