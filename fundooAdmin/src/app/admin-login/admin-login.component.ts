import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  email = String;
  password = String;

  constructor( private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  model={};
 
   login(){
     console.log("Im clicked");
     this.httpService.postRequest('user/adminLogin',this.model).subscribe(data =>{
      console.log('model',this.model);

      this.router.navigate(['dashboard']);
     },
     err =>
     {
       alert("Something went wrong ");
     }
     )
     
   }

}
