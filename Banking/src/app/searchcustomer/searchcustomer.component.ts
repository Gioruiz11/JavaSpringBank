import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {
  user : Customer= new Customer();
  users:any;
  
  constructor(private signupService:CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  searchbyId(id:number){
    this.signupService.getuserList().subscribe(data=>{this.users=data;
      for(let i=0; i<data.length; i++){
        if(this.users[i].customerid=id){
          this.user=this.users[i];


        }


      }



  }

}
