import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'staff', component: StaffloginComponent },
{ path: 'register', component: RegistrationComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'createaccount', component: CreateaccountComponent}
//{ path: 'forgotpassword', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
