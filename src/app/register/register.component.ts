import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public $http:HttpClient,
    public $api: ApiService,
    private $router:Router
    ) {}
public error:any;
     Register(data:any){
      console.log(data)
      let base = this.$api.base()+"/users/create";
      this.$http.post(base,data).subscribe((rez:any)=>{
        if(!rez.state){
          this.error = rez.error["errors"][0]["message"]
          console.log(this.error);
        }
        else{
          this.error = "Account creation succesful, redirecting";
          setTimeout(()=>{
            this.$router.navigate(["login"])
          },2000)
        }
      })
    }
  ngOnInit(): void {
    
  }

}
