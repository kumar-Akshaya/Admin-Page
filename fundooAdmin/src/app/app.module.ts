import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { ApprovalComponent } from './approval/approval.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { DisplayOrderComponent } from './display-order/display-order.component';
import { OrderComponent } from './order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    DashboardComponent,
    ApprovalComponent,
    PaymentStatusComponent,
    DisplayOrderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
