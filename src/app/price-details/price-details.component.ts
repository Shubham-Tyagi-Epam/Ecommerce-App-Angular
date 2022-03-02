import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { Electronics } from '../Electronics';
import { Fashion } from '../Fashion';
import { CartService } from '../services/cart.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit,DoCheck {
  

  @Input('price') price!:number;
  @Input('discount') discount!:number;
  @Input('deliveryCharges') deliveryCharges!:number;
  @Input('totalAmount') totalAmount!:number;

  constructor(private cartService:CartService,private restService:RestService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    // console.log("this.pricededede");
    // this.price = this.cartService.calculatePrice();
    // console.log(this.price);
    // this.discount = this.cartService.calculateDiscount();
    // this.deliverCharges = this.cartService.calculateDeliverCharges();
    // this.totalAmount = this.cartService.calculateTotalAmount();
    
  }
  
}
