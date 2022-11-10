import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerenable',
  templateUrl: './customerenable.component.html',
  styleUrls: ['./customerenable.component.css']
})
export class CustomerenableComponent implements OnInit {
  user : Customer= new Customer();
  users:any;
  
  constructor(private signupService:CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.AllCustomers()


  }
  


  AllCustomers(){
      
    this.signupService.getuserList().subscribe(data=>{this.users=data;
      
     
      
    },error=>console.log(error));


  


}

changeuserStatus(id:any){
 
  this.signupService.changeStatus(id)
    .subscribe(
      (      data: any) => {
        console.log(data);
        
        this.signupService.getuserList().subscribe(data =>{
          
          })
      },
      (      error: any) => console.log(error));



}


}
