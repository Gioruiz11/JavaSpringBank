import { Component, OnInit,Input } from '@angular/core';
import { StaffloginComponent } from '../stafflogin/stafflogin.component';


@Component({
  selector: 'app-staffheader',
  templateUrl: './staffheader.component.html',
  styleUrls: ['./staffheader.component.css']
})
export class StaffheaderComponent implements OnInit {
  username= sessionStorage.getItem("username");
  constructor() { }

  ngOnInit(): void {
  }

}
