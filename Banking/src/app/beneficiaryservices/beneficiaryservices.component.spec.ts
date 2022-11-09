import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryservicesComponent } from './beneficiaryservices.component';

describe('BeneficiaryservicesComponent', () => {
  let component: BeneficiaryservicesComponent;
  let fixture: ComponentFixture<BeneficiaryservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
