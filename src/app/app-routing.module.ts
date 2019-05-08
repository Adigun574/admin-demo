import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from '../app/admin/admin.component'
import { LoginComponent} from '../app/login/login.component'
import { CompaniesComponent} from '../app/companies/companies.component'
import { HelpdeskComponent} from '../app/helpdesk/helpdesk.component'
import { CompanydetailsComponent } from '../app/companydetails/companydetails.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { MainComponent } from '../app/main/main.component'



const routes: Routes = [{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'main', component:MainComponent,

children: [
    {path:'admin', component:AdminComponent, canActivate: [AuthGuard]},
    {path:'companies', component:CompaniesComponent, canActivate: [AuthGuard]},
    {path:'companies/companydetails/:id', component:CompanydetailsComponent, canActivate: [AuthGuard]},
    {path:'helpdesk', component:HelpdeskComponent, canActivate: [AuthGuard]}
  ]
},
{path:'**', component:PagenotfoundComponent}
/*{path:'admin', component:AdminComponent, canActivate: [AuthGuard]},
{path:'companies', component:CompaniesComponent, canActivate: [AuthGuard]},
{path:'companydetails/:id', component:CompanydetailsComponent, canActivate: [AuthGuard]},
{path:'helpdesk', component:HelpdeskComponent, canActivate: [AuthGuard]},
{path:'error',component:PagenotfoundComponent}*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
