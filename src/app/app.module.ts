import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';
import { AuthGuard } from './auth.guard';
import { FilterpipePipe } from './filterpipe.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MainComponent,
    CompaniesComponent,
    CompanydetailsComponent,
    HelpdeskComponent,
    PagenotfoundComponent,
    SearchcompanyComponent,
    FilterpipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
