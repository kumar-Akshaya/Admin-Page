import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

postJSON(url: string, body: any): any {
  url=this.baseUrl+url;
  console.log()
  const httpOptions={
    headers : new HttpHeaders({
    'const-Type' : 'application/json',
    'Authorization':localStorage.getItem('token')
    })
  }
  return this.http.post(url,body,httpOptions)
 }

getJSON(url) {
  url = this.baseUrl + url;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':localStorage.getItem('token')
    })
  }
  return this.http.get(url, httpOptions)
}

getRequest(url){
  return this.http.get(this.baseUrl+url);
}

}