import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CompaniesService } from '../companies.service'
import { Router, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  public companyId
  public data
  public companyDetail
  public users
  constructor(private route:ActivatedRoute, private companiesService:CompaniesService, private router:Router, private http:HttpClient) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.companyId = id
    this.viewCompanyDetails()
    this.getOneUser(id)
    
  }

  

  viewCompanyDetails(){
    this.companiesService.getAllCompanies().subscribe(data=>{this.data=data
    console.log(this.companyDetail = this.data.find(company=>company.id==this.companyId))
    console.log(this.companyDetail)}
    )
  }

  getOneUser(id){
    this.companiesService.getUser(id).subscribe(
      data=>{console.log(this.users = data)
      console.log("user",this.users)}
    )

      
  }


  logOut(){
    this.router.navigateByUrl('login')
    localStorage.removeItem('token')
  }
  

}
