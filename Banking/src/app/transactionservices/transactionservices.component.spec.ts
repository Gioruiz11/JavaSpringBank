import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionservicesComponent } from './transactionservices.component';

describe('TransactionservicesComponent', () => {
  let component: TransactionservicesComponent;
  let fixture: ComponentFixture<TransactionservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
