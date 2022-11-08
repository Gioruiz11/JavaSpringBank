import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent implements OnInit {

  user : Staff= new Staff();
  users: any;
  ack:any;
 
 
  
  constructor(private signupService:StaffService, private router: Router) { }

  ngOnInit(): void {
    
  }

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  get f(){
    return this.profileForm.controls;
  }
  
  login() {
    this.user.username = this.f['username'].value; 
    this.user.password = this.f['password'].value;
    
    if(this.user.username!='' && this.user.password !=null){
      this.signupService.getuserList().subscribe(data=>{this.users=data;
        for(let i=0; i<data.length; i++){
          console.log(this.users)
          console.log(this.user)
          console.log(this.users[i].staffUserName)
          console.log(this.user.username)
          if(this.user.username == this.users[i].staffUserName && this.user.password == this.users[i].staffPassword
            ){
            this.ack = "Login successful";
            sessionStorage.setItem("username",this.user.username);
            
            this.router.navigate(['/beneficiaryenable']);
          }
        }
      },error=>console.log(error));

  
    }

  }
}
