import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
public authStatus:any;
  constructor(
    public $router:Router
  ) { } 
   setAuthStatus(state:boolean){
    if(state || window.localStorage.getItem("auth_token")){
      this.authStatus = true;
    }
  }
  getAuthStatus(){
    return this.authStatus;
  }
  async canActivate(){
    let isAuth = await this.getAuthStatus()
    console.log(isAuth)
    if(!isAuth){
      this.$router.navigate(["login"])
      return false;
    }
    else{
      return true;
    }
  }
}
