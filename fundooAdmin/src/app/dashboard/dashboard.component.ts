import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Service/http.service';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private httpService:HttpService, private router : Router) { }

  ngOnInit() {
    this.getUserList()
  }

  model:any;
  array=[];
  logout(){
  this.router.navigate(['login']);

  }
  data={}
   
  getUserList(){
  this.httpService.getRequest('user/getAdminUserList').subscribe(data=>{
    // console.log(data['data']['data']);
    this.array=data['data']['data'];
    console.log(this.array);
    var count=this.array.length;
    console.log(count);

    
  },err=>{
    console.log('error');
  })
  }

}
