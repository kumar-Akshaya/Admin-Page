import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Route, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  model: any;
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  responace : any;
  constructor( private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

   login(){
     localStorage.clear();
    this.model={
      "email" : this.email.value,
      "password" : this.password.value
    };
    console.log('model',this.model);
     this.httpService.postRequest('user/adminLogin',this.model).subscribe(data =>{
      console.log('responance data  ',data);
      this.responace = data;
      console.log('responance object  ',this.responace);
     
       localStorage.setItem('token', this.responace.id);
       console.log("token...", this.responace.id);
      this.router.navigate(['dashboard']);
     },
     err =>
     {
       alert("Something went wrong ");
     }
     )
     
   }

}
