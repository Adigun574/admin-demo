import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'https://mercatordcr.azurewebsites.net/api/User/Authenticate'

  constructor( private http: HttpClient) { }

  loginUserData(user){
    return this.http.post<any>(this.url, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
