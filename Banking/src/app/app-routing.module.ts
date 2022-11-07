import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreatestaffComponent } from './createstaff/createstaff.component';
import { CustomerComponent } from './customer/customer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffComponent } from './staff/staff.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'stafflogin', component: StaffloginComponent },
{ path: 'register', component: RegistrationComponent },
{ path: 'forgotpassword', component: ForgotpasswordComponent },
{ path: 'updatepassword', component: UpdatepasswordComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'staff', component: StaffComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'createstaff', component: CreatestaffComponent },
{ path: 'viewstaff', component: ViewstaffComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
