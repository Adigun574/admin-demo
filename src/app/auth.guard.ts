import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService:AuthenticationService, private router:Router) {}
  
  canActivate():boolean {
    if (this.authenticationService.loggedIn()){
      return true
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
