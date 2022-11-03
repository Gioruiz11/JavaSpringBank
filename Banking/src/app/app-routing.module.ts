import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'staff', component: StaffloginComponent },
{ path: 'register', component: RegistrationComponent },
//{ path: 'forgotpassword', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
