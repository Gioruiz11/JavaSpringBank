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

  @Input()
  user1 : Customer= new Customer();

  user : Customer= new Customer();
  users: any;
  ack:any;
  cpassword : any;

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
    this.user.password= this.f['password'].value; 
    this.cpassword =this.f['cpassword'].value;
    
    if(this.user.password == this.cpassword){
      this.signupService.putuserlist(this.user).subscribe(data=>{this.users=data;
        //Update Password goes here
      },error=>console.log(error));

  
    }

  }
}
