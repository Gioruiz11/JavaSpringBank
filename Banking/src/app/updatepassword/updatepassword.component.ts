import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  user : Customer= new Customer();
  users: any;
  password:any;
  cpassword : any;
  ack: any;

  constructor(private signupService:CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required])
  });
  
  get f(){
    return this.profileForm.controls;
  }

  update() {

    this.password= this.f['password'].value; 
    this.cpassword =this.f['cpassword'].value;
    
    if(this.password == this.cpassword){
      this.user = this.signupService.getter();
      this.user.password = this.password;
      console.log(this.user)
      this.signupService.putuserlist(this.user).subscribe((data: any)=>
      console.log(data),(error: any)=>console.log(error));
      this.ack = "Update Successful Please Login";
    }else{
      this.ack = "Passwords do not match";
    }

  }
}
