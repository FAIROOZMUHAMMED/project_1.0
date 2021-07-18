import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';
@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {

  constructor() { }
  User={
    jobtitle:'',
    company:'',
    requirements:'',
    joblocation:'',
    exdate:'',
    qualification:'',
    type:'',
    nojobs:'',
    email:'',
    description:'',
  }
  minDate = moment(new Date()).format('YYYY-MM-DD')
  ngOnInit(): void {
  }
  userVerify()
  {
    console.log(this.User);
    Swal.fire("Successfully Added", "","success");

  }
}
