import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { RemovebeneficiaryComponent } from './removebeneficiary/removebeneficiary.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';
import { ViewstatementComponent } from './viewstatement/viewstatement.component';
import { ProfileheaderComponent } from './profileheader/profileheader.component';
import { StaffheaderComponent } from './staffheader/staffheader.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { BeneficiaryservicesComponent } from './beneficiaryservices/beneficiaryservices.component';
import { AccountservicesComponent } from './accountservices/accountservices.component';
import { TransactionservicesComponent } from './transactionservices/transactionservices.component';
import { CustomerenableComponent } from './customerenable/customerenable.component';
import { AccounttransactionsComponent } from './accounttransactions/accounttransactions.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
import { CreatestaffComponent } from './createstaff/createstaff.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SuperAdmin1Component } from './super-admin1/super-admin1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    StaffloginComponent,
    ProfileComponent,
    CreateaccountComponent,
    AddbeneficiaryComponent,
    RemovebeneficiaryComponent,
    TransfermoneyComponent,
    ViewstatementComponent,
    ProfileheaderComponent
    StaffheaderComponent,
 
    SearchcustomerComponent,
    BeneficiaryservicesComponent,
    AccountservicesComponent,
    TransactionservicesComponent,
    CustomerenableComponent,
    AccounttransactionsComponent,
    ForgotpasswordComponent,
    UpdatepasswordComponent,
    CustomerComponent,
    StaffComponent,
    AdminComponent,
    CreatestaffComponent,
    ViewstaffComponent,
    SuperAdminComponent,
    SuperAdmin1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
