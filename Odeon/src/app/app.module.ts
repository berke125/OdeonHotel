import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sign_InComponent } from './Sign_In/Sign_In.component';
import { Sign_UpComponent } from './Sign_Up/Sign_Up.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Hone_PageComponent } from './Home_Page/Home_Page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { CustomerService } from './shared/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerListComponent } from './CustomerList/CustomerList.component';
import { ForgottenPasswordComponent } from './Forgotten_Password/Forgotten_Password.component';
import { ChangePasswordComponent } from './Change_Password/Change_Password.component';


@NgModule({
  declarations: [
    AppComponent,
    Sign_InComponent,
    Sign_UpComponent,
    Hone_PageComponent,
    WelcomeComponent,
    CustomerListComponent,
    ForgottenPasswordComponent,
    ChangePasswordComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
