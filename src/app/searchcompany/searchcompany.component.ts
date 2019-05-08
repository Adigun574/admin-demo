import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import { CompaniesService } from '../companies.service'
import { FilterPipe } from '../filter.pipe'



@Component({
  selector: 'app-searchcompany',
  templateUrl: './searchcompany.component.html',
  styleUrls: ['./searchcompany.component.css'],
  //pipes:  FilterPipe 
})
export class SearchcompanyComponent implements OnInit {
  public companies 
  public searchedCompanies = []
  searchedCompany
  public filteredCompanies
  
  
  //public searchText
  constructor(private companiesService: CompaniesService) {}
 
  
 
  ngOnInit(): void {
    this.searchForCompany()
  }

  searchForCompany(){
    this.companiesService.getAllCompanies().subscribe(data=>this.companies=data)
  }
  test(searchText){
  this.filteredCompanies=this.companies.filter(company=>company.name.toLowerCase().indexOf(searchText.toLowerCase())!==-1 || company.email.toLowerCase().indexOf(searchText.toLowerCase())!==-1) 
  console.log(this.filteredCompanies)
  if(!searchText){
    this.filteredCompanies=[]
  }
  }
  /*test(searchText){
    this.searchedCompanies = this.companies.filter(res=>{
      return res.companies.name.toLowerCase().match(searchText.toLowerCase())
    })
    console.log(this.searchedCompanies)
  }*/
  
  /*test(searchText){
    this.searchedCompany = this.companies.find(list=>list.name.includes(searchText))

    if(this.searchedCompany){
    this.searchedCompanies.push(this.searchedCompany)
    console.log(this.searchedCompanies)
    }
  }*/
  
}



/*test(searchText){
  this.filteredCompanies=this.companies.filter(company=>company.name.toLowerCase().indexOf(searchText.toLowerCase())!==-1)
  console.log(this.filteredCompanies)
  if(!searchText){
    this.filteredCompanies=[]
  }
  }*/