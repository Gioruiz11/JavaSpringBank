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
