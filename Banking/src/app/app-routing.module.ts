import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountservicesComponent } from './accountservices/accountservices.component';
import { AccounttransactionsComponent } from './accounttransactions/accounttransactions.component';
import { BeneficiaryservicesComponent } from './beneficiaryservices/beneficiaryservices.component';
import { CustomerenableComponent } from './customerenable/customerenable.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { StaffheaderComponent } from './staffheader/staffheader.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { TransactionservicesComponent } from './transactionservices/transactionservices.component';
import { AdminComponent } from './admin/admin.component';
import { CreatestaffComponent } from './createstaff/createstaff.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { StaffComponent } from './staff/staff.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'stafflogin', component: StaffloginComponent },
{ path: 'register', component: RegistrationComponent },
{path:'staffheader',component: StaffheaderComponent},
{path:'customersearch',component:SearchcustomerComponent},
{path:'beneficiaryenable',component:BeneficiaryservicesComponent},
{path:'accountenable',component:AccountservicesComponent},
{path:'transfer',component:TransactionservicesComponent},
{path:'customerenable',component:CustomerenableComponent},
{path:'accounttransaction',component:AccounttransactionsComponent},
{ path: 'forgotpassword', component: ForgotpasswordComponent },
{ path: 'updatepassword', component: UpdatepasswordComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'staff', component: StaffComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'createstaff', component: CreatestaffComponent },
{ path: 'viewstaff', component: ViewstaffComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'createaccount', component: CreateaccountComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
