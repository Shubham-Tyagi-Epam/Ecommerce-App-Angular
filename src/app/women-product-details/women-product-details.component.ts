import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../Fashion';
import { AuthGuardService } from '../services/auth-guard.service';
import { WomenFashionService } from '../services/women-fashion.service';

@Component({
  selector: 'app-women-product-details',
  templateUrl: './women-product-details.component.html',
  styleUrls: ['./women-product-details.component.css']
})
export class WomenProductDetailsComponent implements OnInit {
  product!:Fashion;
  images!:string[];
  currentImg!:string;
  constructor(private activatedRoute:ActivatedRoute,private womenFashionService:WomenFashionService,private authGuardService:AuthGuardService,private router:Router) { }
  idForRouting = 0;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.idForRouting = Number(param.get('id'));

    })
    this.productList = this.womenFashionService.getAllProducts();
    this.product = this.getProduct();
    this.images = this.product.images.split(" ");
    this.currentImg = this.images[0];
  }
  productList!:Fashion[];
  // product!:any;
  getProduct(){
    let count = 0;
    for(let p of this.productList){
      if(count == this.idForRouting)
        return p;
      count++;
    }
    return this.productList[0];
  }
  addToCart(){
    let strUrlForRouting;
    if(this.authGuardService.canActivate()){
      alert('Cart Functionality will be aded soon');
    }
    else{
      strUrlForRouting = "login";
      this.router.navigate([strUrlForRouting]);
    }
  }
  changeImage(img:string){
    this.currentImg = img;
  }
}
