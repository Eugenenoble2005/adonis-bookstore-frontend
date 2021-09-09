import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { AuthService } from "../auth.service";
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public $api:ApiService,
    public $auth:AuthService,
    public $http: HttpClient
  ) { }
    public books:any;
    public isAuth:boolean = this.$auth.getAuthStatus()
  ngOnInit(): void {
    this.getBooks()
  }
  getBooks(){
    let base = this.$api.base()+"/books/all";
    this.$http.get(base,{headers:this.$api.getAuthorizationHeader()}).subscribe((rez:any)=>{
      console.log(rez)
      this.books = rez;
    })
  }
  deleteBook(id:number){
    let base = this.$api.base()+"/books/delete";
    this.$http.post(base,{"id":id},{headers:this.$api.getAuthorizationHeader()}).subscribe((rez:any)=>{
      if(rez.state){
        this.getBooks()
      }
    })
  }
}
