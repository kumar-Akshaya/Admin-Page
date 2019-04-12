import { Component, OnInit } from '@angular/core';
import { ApprovalServiceService } from '../Service/approval-Service/approval-service.service';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent implements OnInit {
  array = {};
  paymentType = "COD" ;
  address: any;
  constructor(private approvalService : ApprovalServiceService) { }

  ngOnInit() {
    this.getAllOrderList();
  }

  getAllOrderList(){
    this.approvalService.getOrder().subscribe(data =>{
      console.log("all orders List-----", data);
      this.array=data['data'];
      // this.address=(this.array as any).user.addresses
      console.log('array ', this.array);
      console.log('user address', this.address )
      
    },
    err =>{
      console.log(err);
    })
  }

}
