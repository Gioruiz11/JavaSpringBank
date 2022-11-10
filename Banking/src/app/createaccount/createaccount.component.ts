import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

// /** @title Checkboxes with reactive forms */
// @Component({
//   selector: 'checkbox-reactive-forms-example',
//   templateUrl: './createaccount.component.html',
//   styleUrls: ['./createaccount.component.css'],
// })
// export class CheckboxReactiveFormsExample {
//   accountBalance = this._formBuilder.group({
//     SavingsBank: false,
//     CurrentAccount: false,
    
//   });

//   constructor(private _formBuilder: FormBuilder) {}
// }

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  user : Account = new Account();
  users: Customer = new Customer();
  ack: any;

  constructor(private signupService:CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({

    accountBalance: new FormControl('', [Validators.required]),
    accountType: new FormControl('', [Validators.required]),
    accountStatus: new FormControl('', [Validators.required]),
    dateOfCreation: new FormControl('', [Validators.required]),
    
  
  });
  
  get f(){
    return this.profileForm.controls;
  }

  createAccount() {

    //console.log('Name:' + this.somedata.name);
    //console.log('Series:' + this.somedata.series);
    this.user.accountBalance=this.f['accountBalance'].value;
    this.user.accountType=this.f['accountType'].value;
    this.user.accountStatus=false;
    this.user.dateOfCreation=this.f['dateOfCreation'].value;
    this.user.customer_id = sessionStorage.getItem('custid');
    
    console.log(this.profileForm.value)
    //Post Operationwill be executed here
    if (this.user.customer_id!= null){
    this.addAccount();
    // this.ack = "Account Creation under process";
    // this.router.navigate(["/profile"]);
    }
    //this.signupService.createuserlist(this.user)
    //Here logic will be there Develop your application can add logic here to call API Hit
    //this.router.navigate(['\home']);
  }

  addAccount() {
    this.signupService.createaccountlist(this.user).subscribe((data: any)=>
      console.log(data),(error: any)=>console.log(error));
    this.user = new Account();
    this.ack = "Account Creation under process";
    sessionStorage.removeItem("moved");
    this.router.navigate(["/profile"]);
    // this.router.navigate(["/profile"]);
  }

}
