import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {

  user: Beneficiary = new Beneficiary();
  caccountNumber: any;

  constructor(private signupService:BeneficiaryService,private router: Router) { }

  ngOnInit(): void {
  }
  
  profileForm = new FormGroup({

    accountNumber: new FormControl('', [Validators.required]),
    confirmAccountNumber: new FormControl('', [Validators.required]),
    accounttype: new FormControl('', [Validators.required]),
  });

  get f(){
    return this.profileForm.controls;
  }

  submit() {

    //console.log('Name:' + this.somedata.name);
    //console.log('Series:' + this.somedata.series);

    this.user.beneficiaryAccountNo=this.f['accountNumber'].value;   
    this.caccountNumber = this.f['confirmAccountNumber'].value;      //Angular
    this.user.beneficiaryName = sessionStorage.getItem('custname');
    console.log(this.profileForm.value)
    //Post Operationwill be executed here
    if(this.user.beneficiaryAccountNo == this.caccountNumber){
      this.addUser();
    }
    //this.signupService.createuserlist(this.user)
    //Here logic will be there Develop your application can add logic here to call API Hit
    //this.router.navigate(['\home']);
  }

  addUser() {
    this.signupService.createuserlist(this.user, sessionStorage.getItem('custid')).subscribe((data: any)=>
      console.log(data),(error: any)=>console.log(error));
    this.router.navigate(["/profile"]);

  }
}
