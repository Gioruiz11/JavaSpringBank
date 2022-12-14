import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-accounttransactions',
  templateUrl: './accounttransactions.component.html',
  styleUrls: ['./accounttransactions.component.css']
})
export class AccounttransactionsComponent implements OnInit {
  user: Account= new Account();
  users:any;
  users1:any;
  name!: string;
  users2:any
    constructor(private signupService:AccountService, private cserverice:CustomerService, private router:Router) { }
  
    ngOnInit(): void {
    }
    SearchForm = new FormGroup({
    
      id: new FormControl( [Validators.required], Validators.pattern("^[0-9]*$"))
    });
    
    getaccounts(){
      this.signupService.getuserList().subscribe(data=>{this.users=data;
        console.log(this.users)
      },error=>console.log(error));
  
    }


    getaccountstatement(id:any){
      this.signupService.getAccountStatement(id)
      .subscribe(data=>
        {this.users1=data},error=>console.log(error)) ;
  
  
      console.log(this.users1.id)
      }
      
  
    

    getaccountinfo(id:any){
      this.signupService.getAccountInfo(id)
    .subscribe(data=>
      {this.users=data},error=>console.log(error)) ;


  
    }
    getaccountname(id:any){
      this.signupService.getAccountName(id)
    .subscribe(data=>
      {this.users1=data; this.name=this.users1;this.signupService.getAccountStatement(id).subscribe(data =>{
        this.users2 =data
        }) },error=>console.log(error)) ;
      console.log(this.users1)
      
      
    }

  }