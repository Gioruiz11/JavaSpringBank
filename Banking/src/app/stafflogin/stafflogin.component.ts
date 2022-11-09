
import { Component, OnInit, Output } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';
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
    this.user.staffUserName = this.f['username'].value; 
    this.user.staffPassword = this.f['password'].value;
    
    if(this.user.staffUserName!='' && this.user.staffPassword !=null){

      this.signupService.getuserList().subscribe(data=>{this.users=data;
        for(let i=0; i<data.length; i++){
          console.log(this.users)
          console.log(this.user)

          
          if(this.user.staffUserName == "admin@admin.com" && this.user.staffPassword == "secret@123"){
            this.user.staffFullName = "SuperAdmin";
            this.signupService.setter(this.user);
            this.router.navigate(['/admin']);
          }else if(this.user.staffUserName == this.users[i].staffUserName && this.user.staffPassword == this.users[i].staffPassword){
            this.ack = "Login successful";
            this.signupService.setter(this.users[i]);
            this.router.navigate(['/staffheader']);
          }

        }
      },error=>console.log(error));

  
    }

  }
}
