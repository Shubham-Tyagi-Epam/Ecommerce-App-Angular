import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from '../Cart';
import { Electronics } from '../Electronics';
import { Fashion } from '../Fashion';
import { Order } from '../Order';
import { Profile } from '../Profile';
import { CartService } from '../services/cart.service';
import { ElecProductsService } from '../services/elec-products.service';
import { MensFashionService } from '../services/mens-fashion.service';
import { OrderService } from '../services/order.service';
import { ProfileService } from '../services/profile.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck,OnDestroy {

  constructor(private restService:RestService, private cartService:CartService,private elecProdService:ElecProductsService, private fashionProdService:MensFashionService, private profileService:ProfileService,private router:Router, private orderService:OrderService) { 
  

  }

  varCustId = "custId";
  c_id:any = localStorage.getItem(this.varCustId);
  cartProducts:Cart[] = [];
  fashionProducts:Fashion[] = [];
  elecProducts:Electronics[] = [];
  price:number = 0;
  discount:number = 0;
  deliveryCharges:number = 0;
  totalAmount:number = 0
  profileData!:Profile;
  orders!:Order[];

  ngOnInit(): void {
      this.getCartProductFromRestService();
      console.log("cartProduct "  + this.cartProducts)
  }

  ngDoCheck(): void {
      this.cartProducts = this.cartService.getCartProducts();
      console.log(this.cartProducts);
      this.fashionProducts = this.fashionProdService.getAllProducts();
      this.elecProducts = this.elecProdService.getAllProducts();
      if(this.cartProducts!=undefined){
        this.calculatePrice();
        this.calculateDiscount();
        this.calculateDeliverCharges();
        this.calculateTotalAmount();
      }
      this.profileData = this.profileService.getProfileData();
  } 

  ngOnDestroy(): void {
      
  }

  sendMail(){
    if(this.profileData.address == ""){
      alert("Enter the Delivery Address please")
      this.router.navigateByUrl("/account");
    }
    else{
      for(let i in this.cartProducts){
        let orderObj = new Order(1,this.cartProducts[i].c_id, this.cartProducts[i].p_id, this.cartProducts[i].p_tab, this.cartProducts[i].p_qty, "Placed");
        this.cartService.deleteCartProduct(this.cartProducts[i]);
        this.orderService.insertOrder(orderObj);
      
      }
      this.cartService.sendMail(this.profileData);
    }
  }


  calculateTotalAmount(){
    this.totalAmount =  this.price - this.discount + this.deliveryCharges;
    if(this.totalAmount<=0){
      this.totalAmount = 0;
      this.deliveryCharges = 0;
    }
  }

  calculatePrice(){
    let p;
    this.price = 0;
    console.log("Inside calculate Price");
    console.log(this.cartProducts);
    for(let cp of this.cartProducts){
      p = this.findProduct(cp);
      this.price += (p.price  * cp.p_qty);
    }
    return this.price;
  }

  calculateDiscount(){
    if(this.price>1500)  
      this.discount = 500;
    else if(this.price > 1000)
      this.discount = 200;
    else  
      this.discount = 0;
    return this.discount;

  }

  calculateDeliverCharges(){
    if(this.price>1000)
      this.deliveryCharges = 0;
    else  
      this.deliveryCharges = 50;
    return this.deliveryCharges;
  }

  findProduct(cartProduct:Cart):any{
    console.log("inside find product");
    console.log(cartProduct.p_tab);
    let product:any;
    if(cartProduct.p_tab == "Fashion"){
      
      for(let p of this.fashionProducts){
        if(p.id == cartProduct.p_id){
          product = p;
          return p;
        }
      }
    }
    else{
      for(let p of this.elecProducts){
        if(p.id == cartProduct.p_id){
          product = p;
          return p;
        }
      }
    }
    return this.fashionProducts[0];
  }
  getCartProductFromRestService(){
    this.c_id = localStorage.getItem(this.varCustId);
    this.restService.getCartProd(Number(this.c_id)).subscribe({
      next : (data:any)=>{
        this.cartProducts = data;
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }
}

