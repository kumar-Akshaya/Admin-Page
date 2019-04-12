import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprovalServiceService } from '../Service/approval-Service/approval-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private adminService: ApprovalServiceService, private router: Router) { }

  ngOnInit() {
    // this.getAllUnApprovedQuestion();
    this.getAllOrderService();
  }
  orderArray = []




  getAllOrderService() {
    this.adminService.getAllPlacedOrder().subscribe(data => {
      this.orderArray = data['data'];
      console.log('data after get all placed order', this.orderArray);

    }, err => {
      console.log('error after get all placed order', err);

    })
  }

  completeOrder(index) {
    this.removeFromArray(index)
    const cartData = { 'cartId': index.id }
    this.adminService.completeOrder(cartData).subscribe(data => {
      console.log(data);

    }, err => {
      console.log(err);

    })
  }


  cancelOrder(index) {
    const cartData = { 'cartId': index.id }

    this.removeFromArray(index)
    this.adminService.cancelOrder(cartData).subscribe(data => {
      console.log(data);

    }, err => {
      console.log(err);

    })
  }



  removeFromArray(item) {
    let index = this.orderArray.indexOf(item)
    this.orderArray.splice(index, 1);

  }
  Home() {
    this.router.navigate(['dashboard'])
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
