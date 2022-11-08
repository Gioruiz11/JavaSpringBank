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
}

BenficiaryEnable(){
    
  this.signupService.getuserList().subscribe(data=>{this.users=data;
    
  },error=>console.log(error));

  


}

}