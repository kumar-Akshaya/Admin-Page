import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApprovalComponent } from './approval/approval.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { DisplayOrderComponent } from './display-order/display-order.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path : '',
    component: AdminLoginComponent
  },
  {
    path : 'login',
    component : AdminLoginComponent
  },
  {
    path : 'dashboard',
    component: DashboardComponent,
  },
  {
    path : 'approval',
    component : ApprovalComponent
  },
  {
    path : 'orders',
    component : OrderComponent
  }
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
