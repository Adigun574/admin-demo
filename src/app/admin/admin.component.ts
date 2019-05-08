import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service'
import { Router, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public data = []
  public numberOfCompanies
  //public numberOfLocations = 2
  public result
  public aa
  public bb
  public numberOfLocations
  public data1 = []
  
  

  constructor(private companiesService:CompaniesService, private router:Router) { 
    //this.getNumberOfLocations()
  }

  ngOnInit() {
    this.totalNumberOfCompanies()
    this.getCompanies()
    this.getNumberOfLocations()
    //this.getLocation()
  }

  totalNumberOfCompanies(){
    this.companiesService.getAllCompanies().subscribe(data=>this.numberOfCompanies=data.length)
  }

  getCompanies(){
    this.companiesService.getAllCompanies().subscribe(data=>this.data=data)
  }

  aaa(){
    console.log(this.numberOfLocations)
    console.log(this.data1)
    this.numberOfLocations=this.data1.length
  }
  
  getNumberOfLocations(){
    this.companiesService.getAllCompanies().subscribe(data1=>{this.data1=data1
    this.aa=[]
    for (let i=0; i<this.data1.length; i++){
      //console.log(b = data[i].locations.length)
      this.bb = this.data1[i].locations.length
      if (this.bb==0){this.bb=1}
      this.aa.push(this.bb)
    }
    //console.log(a)
    this.numberOfLocations= this.aa.reduce((a,b)=>a+b,0)
    console.log(this.numberOfLocations)
    console.log(this.data1)
  })
  }

  logOut(){
    this.router.navigateByUrl('login')
    localStorage.removeItem('token')
  }
  

}
