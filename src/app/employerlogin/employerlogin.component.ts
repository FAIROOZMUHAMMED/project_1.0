import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employerlogin',
  templateUrl: './employerlogin.component.html',
  styleUrls: ['./employerlogin.component.css']
})
export class EmployerloginComponent implements OnInit {

  constructor() { }
  User={
    email:'',
    password:'',
  }
  
  ngOnInit(): void {
  }
  userVerify()
  {
    Swal.fire("Error", "Account doesn't exists ", "error")
  }
}
