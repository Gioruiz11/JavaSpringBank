import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.component.html',
  styleUrls: ['./viewstaff.component.css']
})
export class ViewstaffComponent implements OnInit {
  
  user : Staff= new Staff();
  users: any;

  constructor(private signupService:StaffService, private router: Router) { }

  ngOnInit(): void {
  }

  readUser() {  
    this.signupService.getuserList()
      .subscribe(data=>
        {this.users=data},error=>console.log(error)) ;
  
  }

  enable(id:any){
    this.signupService.putuserList(id)
      .subscribe(
        (      data: any) => {
          console.log(data);
          
          this.signupService.getuserList().subscribe(data =>{
            
            })
        },
        (      error: any) => console.log(error));
  
  
  
  }
}
