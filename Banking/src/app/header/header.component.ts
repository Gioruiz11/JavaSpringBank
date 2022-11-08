import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cust = false;
  staff = false;
  s: Staff = new Staff();
  c: Customer = new Customer();

  constructor(private customerService:CustomerService, private staffService: StaffService) {}




  ngOnInit(): void {
      
  }

  ngDoCheck(): void {
    if(this.customerService.getter().fullName != null){
      this.cust=true;
      this.c = this.customerService.getter();
    }
    if(this.staffService.getter().staffFullName != null){
      this.staff=true;
      this.s = this.staffService.getter();
    }
  }

  logout() {
    this.customerService.setter(new Customer());
    this.staffService.setter(new Staff());
  }

}

