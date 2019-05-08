import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  
  public companies
  constructor(private companiesService:CompaniesService, private router: Router) { }

  ngOnInit() {
    this.getCompanyDetails()
    /*this.companies$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term:string)=>this.companiesService.searchCompanies(term))

    )*/
  }

  getCompanyDetails(){
    this.companiesService.getAllCompanies().subscribe(companies=>this.companies=companies)
  }

  viewCompanyDetail(companyId){
    this.router.navigate(['main/companies/companydetails',companyId])
  }

  //search functionality
  /*companies$: Observable<any[]>
  private searchTerms = new Subject<string>()

  search(term:string):void{
    this.searchTerms.next(term)
  }*/


  logOut(){
    this.router.navigateByUrl('login')
    localStorage.removeItem('token')
  }
  
}
