import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { UpdatepasswordComponent } from '../updatepassword/updatepassword.component';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user : Customer= new Customer();
  users: any;
  ack:any;

  constructor(private signupService:CustomerService, private router: Router) { }

  ngOnInit(): void {

  }

  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    secretQuestion: new FormControl('', [Validators.required]),
    secretAnswer: new FormControl('', [Validators.required])
  });
  
  get f(){
    return this.profileForm.controls;
  }

   verify() {
    this.user.userName = this.f['userName'].value; 
    this.user.secretQuestion=this.f['secretQuestion'].value;
    this.user.secretAnswer=this.f['secretAnswer'].value;
    
    if(this.user.userName!='' && this.user.secretAnswer !=null && this.user.secretQuestion != null){
      this.signupService.getuserList().subscribe(data=>{this.users=data;
        for(let i=0; i<data.length; i++){
          console.log(this.users)
          console.log(this.user)
          if(this.user.userName == this.users[i].userName && this.user.secretQuestion == this.users[i].secretQuestion 
            && this.user.secretAnswer == this.users[i].secretAnswer){
              
              this.router.navigate(['/updatepassword'])
          }
        }
      },error=>console.log(error));

  
    }

  }

}
