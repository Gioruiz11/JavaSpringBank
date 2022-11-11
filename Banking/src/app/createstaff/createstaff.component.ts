import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-createstaff',
  templateUrl: './createstaff.component.html',
  styleUrls: ['./createstaff.component.css']
})
export class CreatestaffComponent implements OnInit {

  user : Staff= new Staff();
  users: any;
  ack: any;

  constructor(private signupService:StaffService, private router: Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({

    fullName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  
  get f(){
    return this.profileForm.controls;
  }

  submit() {

    //console.log('Name:' + this.somedata.name);
    //console.log('Series:' + this.somedata.series);
    this.user.staffFullName=this.f['fullName'].value
    this.user.staffUserName=this.f['userName'].value;
    this.user.staffPassword=this.f['password'].value;
    this.user.status = true;

    console.log(this.profileForm.value)
    //Post Operationwill be executed here
    if(this.user.staffUserName!='' && this.user.staffPassword!=null){
      this.addUser();
    }
    //this.signupService.createuserlist(this.user)
    //Here logic will be there Develop your application can add logic here to call API Hit
    //this.router.navigate(['\home']);
  }

  addUser() {
    this.signupService.createuserlist(this.user).subscribe((data: any)=>
      console.log(data),(error: any)=>console.log(error));
    this.user = new Staff();
    this.ack = "Creation Successful";
  }

}
