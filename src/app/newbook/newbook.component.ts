import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.scss']
})
export class NewbookComponent implements OnInit {

  constructor(
    public $api:ApiService,
    public $http: HttpClient,
    public $router:Router
  ) {}

  ngOnInit(): void {
  }
  public error:any;
  NewBook(data:any){
    let base = this.$api.base()+"/books/create"
    let token = this.$api.getToken();
    this.$http.post(base,data,{headers:this.$api.getAuthorizationHeader()}).subscribe((rez:any)=>{
      console.log(rez)
      if(!rez.state){
        this.error = rez.error["errors"][0]["message"]
        console.log(this.error);
      }
      else{
        this.$router.navigate(["/"])
      }
    },(error)=>{
      this.$api.handleError(error)
    })
  }
}
