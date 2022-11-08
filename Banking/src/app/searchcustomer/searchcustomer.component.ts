import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  SearchForm = new FormGroup({
    
    id: new FormControl( [Validators.required], Validators.pattern("^[0-9]*$"))
  });
  searchbyId(id:any){
      
      this.signupService.getuserList().subscribe(data=>{this.users=data;
        
        for(let i=0; i<data.length; i++){
    
          if(id==this.users[i].customerId){
            
            
          
  
          }
          
        }
        
      },error=>console.log(error));

  
    


  }

}
