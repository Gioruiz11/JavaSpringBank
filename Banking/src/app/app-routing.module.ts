import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryservicesComponent } from './beneficiaryservices/beneficiaryservices.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { StaffheaderComponent } from './staffheader/staffheader.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'staff', component: StaffloginComponent },
{ path: 'register', component: RegistrationComponent },
{path:'staffheader',component: StaffheaderComponent},
{path:'customersearch',component:SearchcustomerComponent},
{path:'beneficiaryenable',component:BeneficiaryservicesComponent}
//{ path: 'forgotpassword', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
