import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovalServiceService {

  constructor(private httpService : HttpService) { }

  getUserList(){
    return this.httpService.getJSON('questionAndAnswerNotes/getUnApprovedAnswer');
  }

  changeRes(parentId){
    return this.httpService.postJSON('questionAndAnswerNotes/approve/'+parentId, parentId);
  }

  changeApp(parentId){
    return this.httpService.postJSON('questionAndAnswerNotes/reject/'+parentId, parentId);
  }

  // payment Service
  getOrder(){
    return this.httpService.getJSON('productcarts/userCartList');
  }
  getAllPlacedOrder(){
    return this.httpService.getJSON('productcarts/userCartList');
  
  }
  
  completeOrder(data){
    return this.httpService.postJSON('productcarts/adminCompleteOrder',data);
  }
  cancelOrder(data){
    return this.httpService.postJSON('productcarts/adminCancelOrder',data);
  
  }
}
