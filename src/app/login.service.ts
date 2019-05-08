import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'


class User{
  identifier:string;
  password:any;
  //status?:any
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json-patch+json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }

  authenticateUser(user: User):Observable<User> {
    const url = 'https://mercatordcr.azurewebsites.net/api/User/Authenticate'
    return this.http.post<User>(url, user, httpOptions)
      /*.pipe(
        tap(_ => this.log('error occured')),
        catchError(this.handleError<User>('authenticateUser'))
      )*/
  }

  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log("wrong username and/or password")
      

      this.log(`${operation} failed: ${error.message}`)

      return of (result as T)
    }
  }

  private log(message: string) {

    //console.log('incorrect credentials, please try again')
  }*/
}

 