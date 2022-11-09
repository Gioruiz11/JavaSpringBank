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

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'staff', component: StaffloginComponent },
{ path: 'register', component: RegistrationComponent },
{path:'staffheader',component: StaffheaderComponent},
{path:'customersearch',component:SearchcustomerComponent},
{path:'beneficiaryenable',component:BeneficiaryservicesComponent},
{path:'accountenable',component:AccountservicesComponent},
{path:'transfer',component:TransactionservicesComponent},
{path:'customerenable',component:CustomerenableComponent},
{path:'accounttransaction',component:AccounttransactionsComponent}
//{ path: 'forgotpassword', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
