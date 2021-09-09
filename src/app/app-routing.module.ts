import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from "./auth.service";
const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"login",
  component:LoginComponent
},{
  path:"register",
  component:RegisterComponent
},{
  path:"newbook",
  component:NewbookComponent,
  canActivate:[AuthService]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
