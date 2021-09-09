import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    public $router:Router
  ) { }
  base(){
    return "http://localhost:3333"
  }
token = window.localStorage.getItem("auth_token");
  getToken(){
    return this.token
  }
  getAuthorizationHeader(){
    return {"Authorization":`Bearer ${this.token}`}
  }
  handleError(error:any){
    if(error.status === 401){
      window.localStorage.removeItem("auth_token");
      this.$router.navigate(["login"])
    }
  }
}
