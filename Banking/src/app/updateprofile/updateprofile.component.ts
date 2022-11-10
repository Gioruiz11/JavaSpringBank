import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  user : Customer= new Customer();
  users: any;

  constructor(private signupService:CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({

    fullName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    ssn: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    secretQuestion: new FormControl('', [Validators.required]),
    secretAnswer: new FormControl('', [Validators.required])
  });
  
  get f(){
    return this.profileForm.controls;
  }

  submit() {

    //console.log('Name:' + this.somedata.name);
    //console.log('Series:' + this.somedata.series);

    this.user.fullName=this.f['fullName'].value;         //Angular
    this.user.userName=this.f['userName'].value;
    this.user.password=this.f['password'].value;
    this.user.ssn=this.f['ssn'].value;
    this.user.phone=this.f['phone'].value;
    this.user.secretQuestion=this.f['secretQuestion'].value;
    this.user.secretAnswer=this.f['secretAnswer'].value;
    this.user.status = true;

    console.log(this.profileForm.value)
    //Post Operationwill be executed here
    if(this.user.userName!='' && this.user.password!=null){
    this.updateUser();
    }
    }

    updateUser() {
      this.signupService.putuserlist(this.user).subscribe((data: any)=>
        console.log(data),(error: any)=>console.log(error));
      this.user = new Customer();
      this.router.navigate(["/profile"]);
    }
}

