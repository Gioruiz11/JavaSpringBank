import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : Customer= new Customer();
  users: any;
  ack:any;

  constructor(private signupService:CustomerService, private router: Router) { }

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  get f(){
    return this.profileForm.controls;
  }

  ngOnInit(): void {
  }

  login() {
    this.user.userName = this.f['username'].value; 
    this.user.password = this.f['password'].value;
    
    if(this.user.userName!='' && this.user.password !=null){
      this.signupService.getuserList().subscribe(data=>{this.users=data;
        for(let i=0; i<data.length; i++){
          console.log(this.users)
          console.log(this.user)
          if(this.user.userName == this.users[i].userName && this.user.password == this.users[i].password){
            this.ack = "Login successful";
            this.router.navigate(['/profile']);
          }
        }
      },error=>console.log(error));

  
    }

  }
}
