import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Order } from '../Order';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  varCustId = "custId";
  c_id:any = localStorage.getItem(this.varCustId);
  orders:Order[] = [];
  allOrders:Order[] = [];
  flags:boolean[] = [];

  constructor(private restService:RestService) { 
    this.getOrdersFromRestService();
    this.getAllOrdersFromRestService();
  }
  
  getOrders(){
    return this.orders;
  }

  getAllOrders(){
    return this.allOrders;
  }

  getOrdersFromRestService(){
    this.restService.getOrders(Number(this.c_id)).subscribe({
      next : (data:any)=>{
        this.orders = data;
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }

  getAllOrdersFromRestService(){
    this.restService.getAllOrders().subscribe({
      next : (data:any)=>{
        this.allOrders = data;
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }

  insertOrder(orderObj:Order){
    this.restService.insertOrder(orderObj).subscribe({
      next : (data)=>{
        this.getOrdersFromRestService();
      },
      error : (err)=>{
        alert(err.error);
      }
    });
  }

  updateStatus(orderObj:Order){
    console.log(orderObj);
    this.restService.updateOrderStatus(orderObj).subscribe({
      next : (data)=>{
        this.getAllOrdersFromRestService();
        this.getOrdersFromRestService();
      },
      error : (err)=>{
        alert(err.error);
      }
    });
  }
  
}
