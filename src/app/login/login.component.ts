import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { Router, RouterLinkActive } from '@angular/router'
import { AuthenticationService } from '../authentication.service'
import { error } from 'util';
//import '../../../node_modules/jsonwebtoken'
//const jwt = require('jsonwebtoken')

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //public token = {jwt.sign(payload, "secretKey")}
  public displayErrorMessage
  constructor(private loginService:LoginService, private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  /*loginUser(aaa,bbb) {
    let username=aaa
    let password=bbb
 
     let user = {
     identifier:username,
     password:password
   }*/
  loginUser(aaa,bbb){
    let displayErrorMessage
    let username=aaa
    let password=bbb

    let user={
      identifier:username,
      password:password
    }
    let tokenn = Math.random().toString()
    this.authenticationService.loginUserData(user).subscribe(
      res=>{console.log(res)
      this.router.navigateByUrl('main/admin')
      localStorage.setItem('token',tokenn)
      /*let payload = {subject:user.password}
      let token = jwt.sign(payload,'secretKey')
      console.log(token)*/},
      err=>{console.log(err)
      this.displayErrorMessage=true}
    )
  }
  /*public username=aaa
  public password=bbb

  public user = {
    identifier:this.username,
    password:this.password
  }*/

  //uncomment from here
  //initial login
  /*
  public dataStatus
  public displayErrorMessage

  loginUser(aaa,bbb) {
   let username=aaa
   let password=bbb

    let user = {
    identifier:username,
    password:password
  }
    //this.loginService.authenticateUser(this.user).subscribe(data => {this.loginSuccessful()})
    //this.username = aaa.value
    //this.password = bbb.value
   
    //console.log(this.username,this.password)
    this.loginService.authenticateUser(user).subscribe(data=>{
      //console.log(data)
     // console.log(this.dataStatus=data.status)
    //if(this.dataStatus==true){this.loginSuccessful()
      this.loginSuccessful()
  },
    err=>{console.log(`error:${err}`)
  this.loginFailed()}
    )
    //console.log(aaa,bbb)
   
  }

  loginSuccessful(){
    //this.router.navigate(['admin'])
    this.router.navigateByUrl('admin')
  }

  loginFailed(){
    console.log("no")
    this.displayErrorMessage=true
  }*/
  

}



