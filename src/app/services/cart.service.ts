import { DoCheck, Injectable } from '@angular/core';
import { Cart } from '../Cart';
import { Electronics } from '../Electronics';
import { Fashion } from '../Fashion';
import { ElecProductsService } from './elec-products.service';
import { MensFashionService } from './mens-fashion.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  electronicProducts!:Electronics[];
  fashionProducts:Fashion[] = [];
  cartProducts:Cart[] = [];
  varCustId = "custId";
  c_id:any = localStorage.getItem(this.varCustId);

  discount:number = 0;
  deliveryCharges:number = 0;
  price:number = 0;
  dupCartProducts!:Cart[];

  constructor(private restService:RestService) { 
    this.getCartProductFromRestService();
  }
  
  getCartProducts(){
    return this.dupCartProducts;
  }

  getCartProductFromRestService(){
    this.restService.getCartProd(Number(this.c_id)).subscribe({
      next : (data:any)=>{
        this.cartProducts = data;
        this.dupCartProducts = data;
        console.log("--- dupCart ----");
        console.log(this.dupCartProducts);
        
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }

  insertCartProduct(p_id:number,p_tab:string){
    console.log("p_id = " + p_id);
    let cartObj:Cart = new Cart(0,this.c_id,p_id,p_tab,1);
    
    for(let cp of this.cartProducts){
      if(cp.p_id == p_id && cp.p_tab == p_tab){
        alert("Product already in the cart");
        return;
      }
    }

    this.restService.insertCartProduct(cartObj).subscribe({
      next : (data)=>{
        alert('product inserted');
        this.getCartProductFromRestService();
      },
      error : (err)=>{
        alert(err.error);
      }
    });
  }

  deleteCartProduct(cartProduct:Cart){
      this.restService.deleteCartProduct(cartProduct).subscribe({
        next : (data)=>{
          this.getCartProductFromRestService();
        },
        error : (err)=>{
          alert(err.error);
        }
      });
  }

  updateProductQty(cartProduct:Cart,p_qty:number){
    cartProduct.p_qty = p_qty;
    console.log("cartProduct.p_qty " + cartProduct.p_qty);
    console.log(typeof(cartProduct.p_qty));
    this.restService.updateCartProduct(cartProduct).subscribe({
      next : (data)=>{
        this.getCartProductFromRestService();
      },
      error : (err)=>{
        alert(err.error);
      }
    });
  }

  sendMail(){
    alert('cart service');
    this.restService.sendOrderPlacedMail().subscribe({
      next : (data)=>{
        // this.getCartProductFromRestService();
        alert('Check Your mail please');
      },
      error : (err)=>{
        alert(err.error);
      }
    });
  }

  

  calculateTotalAmount(){
    return this.price - this.discount - this.deliveryCharges;
  }

  calculatePrice(){
    let p;
    this.price = 0;
    console.log("Inside calculate Price");
    console.log(this.dupCartProducts);
    for(let cp of this.dupCartProducts){
      p = this.findProduct(cp);
      this.price += p.price;
    }
    return this.price;
  }

  calculateDiscount(){
    if(this.price>1000)  
      this.discount = 500;
    else if(this.price > 500)
      this.discount = 200;
    else  
      this.discount = 0;
    return this.discount;

  }

  calculateDeliverCharges(){
    if(this.price>500)
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
        if(p.id == cartProduct.id){
          product = p;
          console.log("-------------------")
          console.log(p);
          return p;
        }
      }
    }
    return this.fashionProducts[0];
  }

  


}
