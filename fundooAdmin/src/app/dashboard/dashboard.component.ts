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
  pre: any;
 


  constructor(private httpService:HttpService, private router : Router) { }

  ngOnInit() {
    this.getUserList()
  }

  model:any;
  array=[];
  basicArray= [];
  advanceArray = [];
  advanceUsers : number;
  basicUsers : number; 
  isclick : boolean = true;
  isShow: boolean = true;
value : any='';

  logout(){
  this.router.navigate(['login']);
  localStorage.clear();
  }
  data={}
   
  getUserList(){
    
  this.httpService.getRequest('user/getAdminUserList').subscribe(data=>{
    // console.log(data['data']['data']);
    this.array=data['data']['data'];
    console.log(this.array);
    var count=this.array.length;
    console.log(count);
    this.advanceArray = this.array.filter(function (el){
      return (el.service === "advance");
      
    })
    this.advanceUsers = this.advanceArray.length;
    this.basicUsers = this.array.length-this.advanceUsers;
    console.log("advance users ", this.advanceUsers);
    console.log("basic users ", this.basicUsers);
 

  },err=>{
    console.log('error');
  })

  
  
  }

  onKeyUp(event: any) {
    //storing value in previous
    this.pre = this.value;
    this.value = event.target.value;
    if (this.value.length < this.pre.length) {//when user hit back space
      this.array = this.array;
    }
    //method for name filtering
    var checkName = (item: any) => {
      // console.log('item ',item.firstName.toLowerCase(),'  value ',this.values.toLowerCase())
      return item.firstName.toLowerCase().startsWith(this.value.toLowerCase());
    }
    //array filter
    this.array = this.array.filter(function (item) {
      // console.log('item',item);
      return checkName(item);
    });
    console.log(this.array);

  }
  showUsers(){
   this.isclick = ! this.isclick;
   console.log(this.isclick);
   
   if(this.isclick==false){
    this.router.navigate(['approval']);
    }else{
     this.router.navigate(['dashboard']);
    }
   
  }

  showOrder(){
    this.isShow=!this.isShow;
    if(this.isShow==false){
      this.router.navigate(['orders']);
    }
    else{
      this.router.navigate(['dashboard']);
    }
  }

  
    
}
