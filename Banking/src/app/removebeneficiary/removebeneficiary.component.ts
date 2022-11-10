import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-removebeneficiary',
  templateUrl: './removebeneficiary.component.html',
  styleUrls: ['./removebeneficiary.component.css']
})
export class RemovebeneficiaryComponent implements OnInit {
  users: any;

  constructor(private signupService: BeneficiaryService) { }

  ngOnInit(): void {
    this.signupService.getuserList().subscribe(data=>{this.users=data;
      console.log(this.users)
    },error=>console.log(error));
  }


  deleteUser(id: number) {
    this.signupService.deleteUser(id, sessionStorage.getItem("custid"))
      .subscribe(
        (data: any) => {
          console.log(data);
          this.signupService.getuserList().subscribe(data =>{
            this.users =data
            })
        },
        (      error: any) => console.log(error));
  }
}

