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

  s : any;
  c : any;

  constructor(private customerService:CustomerService, private staffService: StaffService) {}




  ngOnInit(): void {
      
  }


  ngDoCheck(): void {
    this.s = sessionStorage.getItem('staffname');
    this.c = sessionStorage.getItem('custname');

    console.log(this.s);
    console.log(this.c);
  }
    

  logout() {
    sessionStorage.removeItem('custid');
    sessionStorage.removeItem('custname');
    sessionStorage.removeItem('staffid');
    sessionStorage.removeItem('staffname');
  }

}

