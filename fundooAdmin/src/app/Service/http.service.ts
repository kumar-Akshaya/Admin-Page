import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 array=[];
 
  baseUrl = "http://34.213.106.173/api/"
 
  constructor(private http: HttpClient) { }

  postRequest(url, data) {
    console.log(data);
    
    return this.http.post(this.baseUrl + url, data);
}

getRequest(url){
  console.log("get request");


  return this.http.get(this.baseUrl+url);
}
}