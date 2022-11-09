import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounttransactionsComponent } from './accounttransactions.component';

describe('AccounttransactionsComponent', () => {
  let component: AccounttransactionsComponent;
  let fixture: ComponentFixture<AccounttransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccounttransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccounttransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
