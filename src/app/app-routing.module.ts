import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { HomeComponent } from './home/home.component';
import { JobpostingComponent } from './jobposting/jobposting.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent},
 
      {
        path:"employerlogin",component:EmployerloginComponent
      },
      {
        path:"employersignup",component:EmployersignupComponent
      },
      {
        path:"jobposting",component:JobpostingComponent
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
