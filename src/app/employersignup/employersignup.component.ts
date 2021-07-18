import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employersignup',
  templateUrl: './employersignup.component.html',
  styleUrls: ['./employersignup.component.css']
})
export class EmployersignupComponent implements OnInit {

  constructor() { }
  User={
    firstname:'',
    lastname:'',
    company:'',
    jobtitle:'',
    nojobs:'',
    email:'',
    password:'',
    confirmpass:''
  }
  errormsg:any
  pwdSt:any
  txtcolr:any
  userVerify()
  {
    if (this.User.confirmpass===this.User.password) {
      console.log("Called");    
      Swal.fire("Successfully Added", "","success");
    } else {
      Swal.fire("Error", "Account already exists ", "error")
    }
  }
  ngOnInit(): void {
  }
  validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");

   if(false === enoughRegex.test(this.User.password)){
    this.pwdSt="More character";
    this.txtcolr="text-info";
    
   }
   else if(strongRegex.test(this.User.password)){
    this.pwdSt="Strong";
    this.txtcolr="text-success";
     
         
   }
   else if(mediumRegex.test(this.User.password)){
    this.pwdSt="Medium";
    this.txtcolr="text-warning";
    
   }
   else{
    this.pwdSt="Poor";
    this.txtcolr="text-danger";
   
   } 
  }
}
