import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transfermoney',
  templateUrl: './transfermoney.component.html',
  styleUrls: ['./transfermoney.component.css']
})
export class TransfermoneyComponent implements OnInit {

  user: Transaction= new Transaction();
  users: any;
  NUMERIC_PATTREN = '^-?[0-9]\\d*(\\.\\d{1,4})?$';
  now = new Date();
  date:any;

  constructor(private signupService:TransactionService,private router:Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({

    reason: new FormControl('', [Validators.required]),
    fromAccountNo: new FormControl( [Validators.required],Validators.pattern("^[0-9]*$")),
    toAccountNo: new FormControl([Validators.required],Validators.pattern("^[0-9]*$")),
    amount: new FormControl([Validators.required],Validators.pattern(this.NUMERIC_PATTREN)),
    transactionType: new FormControl('', [Validators.required]),
    
  });
  get f(){
    return this.profileForm.controls;
  }

  submit() {

    //console.log('Name:' + this.somedata.name);
    //console.log('Series:' + this.somedata.series);

    this.user.reason=this.f['reason'].value;         //Angular
    this.user.fromAccountNo=this.f['fromAccountNo'].value;
    this.user.toAccountNo=this.f['toAccountNo'].value;
    this.user.amount=this.f['amount'].value;
    this.user.transactionType=this.f['transactionType'].value;
    this.date=this.now.getUTCFullYear() + '-' +
    ('00' + (this.now.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + this.now.getUTCDate()).slice(-2);
    this.user.date=this.date;
    this.createTransaction()
  
  
  }
  createTransaction(){
 
   this.signupService.createTransaction(this.user).subscribe(data=>{this.users=data;
    this.user=new Transaction();
  },error=>console.log(error))
  sessionStorage.removeItem("moved");
  this.router.navigate(["/profile"]);

}
}
