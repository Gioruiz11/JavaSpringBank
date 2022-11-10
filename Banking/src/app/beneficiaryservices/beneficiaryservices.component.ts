import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-beneficiaryservices',
  templateUrl: './beneficiaryservices.component.html',
  styleUrls: ['./beneficiaryservices.component.css']
})
export class BeneficiaryservicesComponent implements OnInit {
user:Beneficiary=new Beneficiary();
users: any;

constructor(private signupService:BeneficiaryService, private router: Router) { }

ngOnInit(): void {
  this.BenficiaryEnable()
}

BenficiaryEnable(){
  
  this.signupService.getuserList().subscribe(data=>{this.users=data;
    for(let i=0; i<data.length; i++){
      console.log(this.users)}
   
    
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