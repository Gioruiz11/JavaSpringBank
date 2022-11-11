import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Account= new Account();
  users: any;
  s:any;

  constructor(private signupService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.signupService.getAccount(sessionStorage.getItem("custid")).subscribe(data=>{this.users=data;
      console.log(this.users)
    },error=>console.log(error));
  }

  ngDoCheck(): void {
    this.s = sessionStorage.getItem('moved');
  }


  click() {
    sessionStorage.setItem("moved","true");
  }
}
