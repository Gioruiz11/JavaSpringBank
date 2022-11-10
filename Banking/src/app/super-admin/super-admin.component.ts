import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  user : Staff= new Staff();
  users: any;
  ack:any;
  deleteMessge: any;
  @Input() staff: any;
  @Output() status = new EventEmitter<boolean>();
  

  enabled: boolean = true; 
  disabled: boolean =false;


  constructor(private signupService:StaffService, private router: Router) { }
 
  
  ngOnInit(): void {
    this.ack = "Add record please";
  }
  goToAdmin1() {
    // const navigationDetails: string[] = ['/super-admin1'];
     //if($myParam.length) {
      // navigationDetails.push($myParam);
     //}
     this.router.navigate(['/super-admin1']);
    // this.router.navigate(navigationDetails);
   }
 
  

  isActive(active: boolean) {
    this.status.emit(active);
    if (active) {
      this.enabled = true;
      this.disabled = false;
    } else {
      this.enabled = false;
      this.disabled = true;
    }
  }

  

  addUser() {
    this.signupService.createuserlist(this.user).subscribe(data => console.log(data),error=>console.log(error));
    this.user = new Staff();
//in htmfile with the help of interpolation {{}}data can be populated from TS file of the same component
 this.ack= "Record added successfully";
  }
  readUser() {  
    this.signupService.getuserList()
      .subscribe(data=>
        {this.users=data},error=>console.log(error)) ;
    
    }
    
    deleteUser(id: number) {
      this.signupService.deleteuserList(id)
        .subscribe(
          (      data: any) => {
            console.log(data);
            this.deleteMessge=true;
            this.signupService.getuserList().subscribe(data =>{
              this.users =data
              })
          },
          (      error: any) => console.log(error));
    
          /// user  or data you need to write some logic to iterate 
          // and  match with your credentials
     }


  profileForm = new FormGroup({
    stafffullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    //password1: new FormControl('', [Validators.required])
  });
  
  get f(){
    return this.profileForm.controls;
  }
  
  submit() {
    this.user.staffFullName = this.f['stafffullname'].value; 
    this.user.staffUserName = this.f['username'].value; 
    this.user.staffPassword = this.f['password'].value;
    //this.user.password = this.f['password'].value;
    
    if(this.user.staffUserName!='' && this.user.staffPassword  !=null && this.user.staffFullName !=null && this.user.staffFullName .length>=4){
      this.signupService.getuserList().subscribe(data=>{this.users=data;
        for(let i=0; i<data.length; i++){
          console.log(this.users)
          console.log(this.user)
          if(this.user.staffUserName == this.users[i].username && this.user.staffPassword  == this.users[i].password){
            this.addUser();
            this.ack = "Staff Created  successfully";
            this.router.navigate(['/staff']);
          }
        }
      },error=>console.log(error));

  
    }

  }
}