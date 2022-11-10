import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountservices',
  templateUrl: './accountservices.component.html',
  styleUrls: ['./accountservices.component.css']
})
export class AccountservicesComponent implements OnInit {
user: Account= new Account();
users: any;

  constructor(private signupService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.getaccounts()
  }
  getaccounts(){
    this.signupService.getuserList().subscribe(data=>{this.users=data;
      console.log(this.users)
    },error=>console.log(error));

  }
  changeuserStatus(id:any){
 
    this.signupService.changeuserStatus(id)
    .subscribe(
      (      data: any) => {
        console.log(data);
        
        this.signupService.getuserList().subscribe(data =>{
          this.users =data
          })
      },
      (      error: any) => console.log(error));

}

}
