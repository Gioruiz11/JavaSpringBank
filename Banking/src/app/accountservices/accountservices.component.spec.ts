import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountservicesComponent } from './accountservices.component';

describe('AccountservicesComponent', () => {
  let component: AccountservicesComponent;
  let fixture: ComponentFixture<AccountservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
