import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  
  
  //public id = 18
  //public id:number
  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }
  
  getAllCompanies():Observable<any>{
    const url = 'https://mercatordcr.azurewebsites.net/api/Company/GetAll'

    return this.http.get<any>(url)
  }

  

  getUser(id):Observable<any>{
    //this.route.paramMap.subscribe((params: ParamMap)=>{
    //this.id = parseInt(params.get('id'))
    //this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    
    //})
    //let id = this.route.snapshot.paramMap.get('id')
  
    const url = `https://mercatordcr.azurewebsites.net/api/User/GetByCompany/${id}`
    

    return this.http.get<any>(url)
  
    
  }


  
searchCompanies(term: string): Observable<any[]> {
  const companiesUrl = 'https://mercatordcr.azurewebsites.net/api/Company/GetAll'


  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<any[]>(`${companiesUrl}/?name=${term}`)
  /*.pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );*/
}
  

}
