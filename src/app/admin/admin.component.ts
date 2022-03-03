import { Component, DoCheck, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,DoCheck {
  allOrders!:Order[];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.allOrders = this.orderService.getAllOrders();
  }
  
  ngDoCheck(): void {
    this.allOrders = this.orderService.getAllOrders();
  }

  isOrderPlaced(order:Order){
    if(order.status == "Placed")
      return true;
    return false;
  }
  isOrderShipped(order:Order){
    if(order.status == "Shipped")
      return true;
    return false;
  }
  isOrderDelivered(order:Order){
    if(order.status == "Delivered")
      return true;
    return false;
  }

  updateStatus(order:Order,status:string){
    console.log(order,status)
    order.status = status;
    this.orderService.updateStatus(order);
  }
}
