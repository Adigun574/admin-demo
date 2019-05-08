import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigateByUrl('login')
    localStorage.removeItem('token')
  }
  
}
