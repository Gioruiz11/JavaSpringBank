import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { CustomerService } from '../customer.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-viewstatement',
  templateUrl: './viewstatement.component.html',
  styleUrls: ['./viewstatement.component.css']
})
export class ViewstatementComponent implements OnInit {
  user: Account = new Account();
  user2: Transaction = new Transaction();
  users: any;
  users2: any;

  constructor(private signupService:CustomerService, private signupService1:AccountService, private router: Router) { }

  ngOnInit(): void { this.getAccountById(sessionStorage.getItem("custid"))
  }

  SearchForm = new FormGroup({
    
    id: new FormControl( [Validators.required], Validators.pattern("^[0-9]*$"))

  });
  
  getAccountById(id: any) {  
    this.signupService.getAccountByCustomerId(id)
      .subscribe(data=>
        {this.users=data},error=>console.log(error)) ;

  }

  getTranscation(id: any) {  
    this.signupService1.getAccountInfo(id)
      .subscribe(data=>
        {this.users2=data},error=>console.log(error)) ;

  }

}
