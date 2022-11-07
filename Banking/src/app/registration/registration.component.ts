import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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

    this.user.fullname=this.f['fullName'].value;         //Angular
    this.user.username=this.f['userName'].value;
    this.user.password=this.f['password'].value;
    this.user.ssn=this.f['ssn'].value;
    this.user.phone=this.f['phone'].value;
    this.user.secretquestion=this.f['secretQuestion'].value;
    this.user.secretanswer=this.f['secretAnswer'].value;
    this.user.status = true;

    console.log(this.profileForm.value)
    //Post Operationwill be executed here
    if(this.user.username!='' && this.user.password!=null){
    this.addUser();
    }
    //this.signupService.createuserlist(this.user)
    //Here logic will be there Develop your application can add logic here to call API Hit
    //this.router.navigate(['\home']);
  }

  addUser() {
    this.signupService.createuserlist(this.user).subscribe((data: any)=>
      console.log(data),(error: any)=>console.log(error));
    this.user = new Customer();
  }

}
