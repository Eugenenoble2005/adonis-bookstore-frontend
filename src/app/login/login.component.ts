import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public $http: HttpClient,
    public $api: ApiService,
    public $router:Router,
    public $auth: AuthService
  ) { }
  public error:any;
  Login(data:any){
    console.log(data)
    let url = this.$api.base()+"/users/login";
    this.$http.post(url,data).subscribe((rez:any)=>{
      if(rez.state){
        var token = rez.token["token"]
        window.localStorage.setItem("auth_token",token);
        this.$auth.setAuthStatus(true);
        window.location.reload();
        this.$router.navigate(["/"])
      }
      else{
        this.error = rez.error
      }
    })
  }
  ngOnInit(): void {

  }

}
