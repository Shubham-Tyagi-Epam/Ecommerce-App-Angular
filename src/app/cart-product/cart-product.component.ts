import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from '../Cart';
import { Electronics } from '../Electronics';
import { Fashion } from '../Fashion';
import { CartService } from '../services/cart.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit,OnChanges {
  // @Input('product') product!:Cart;
  currentImage!:string;
  images!:string[];
  @Input('product') product!:any;
  @Input('cartProduct') cartProduct!:any;
  constructor(private cartService:CartService) { 
    // this.getElectronicProducts();
    // this.getFashionProducts();
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
      
  }

  fashionProducts:Fashion[] = [];
  electronicProducts:Electronics[] = [];

  ngOnInit(): void {
   
    // console.log("Cart component ");
    // console.log(this.cartProduct.p_qty);
    this.images = this.product.images.split(" ");
    this.currentImage = this.images[0];
   

  }
  
  deleteCartProduct(){
      // console.log(this.cartProduct);
      this.cartService.deleteCartProduct(this.cartProduct);
  }

  updateCartProductQty(action:string){
    console.log(this.cartProduct);
    let qty = this.cartProduct.p_qty;
    if(action == 'increase')
      qty+=1;
    else if(qty>1)
      qty -=1;
    else  if(qty==1)
      return;
    if(qty == 0)
      this.deleteCartProduct();
    else
      this.cartService.updateProductQty(this.cartProduct,qty);
  }

  // getFashionProducts(){
  //   this.restService.getAllFashionProducts().subscribe({
  //     next : (data:any)=>{
  //       this.fashionProducts = data;
  //       // console.log(this.fashionProducts)
  //       this.findProduct(this.cartProduct.p_tab);
  //     },
  //     error : (err)=>{
  //       console.log(err);
  //     }
  //   });
  // }

  // getElectronicProducts(){
  //   this.restService.getAllElectronicsProducts().subscribe({
  //     next : (data:any)=>{
  //       this.electronicProducts = data;
  //       this.findProduct(this.cartProduct.p_tab);
  //     },
  //     error : (err)=>{
  //       console.log(err);
  //     }
  //   });
  // }

  // findProduct(table:string){
  //   console.log(table);
    
  //   if(table == "Fashion"){
  //     for(let p of this.fashionProducts){
  //       if(p.id == this.cartProduct.p_id){
  //         this.product = p;
  //         console.log(this.product);
  //         this.images = p.images.split(" ");
  //         this.currentImage = this.images[0];
  //         console.log(this.currentImage);
  //       }
  //     }
  //   }
  // }

}
