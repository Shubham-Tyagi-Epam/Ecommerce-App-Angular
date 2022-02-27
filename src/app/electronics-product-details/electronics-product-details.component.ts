import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { ElecProductsService } from '../services/elec-products.service';

import { PriceFormatterPipe } from '../pipes/price-formatter.pipe';
import { Electronics } from '../Electronics';

@Component({
  selector: 'app-electronics-product-details',
  templateUrl: './electronics-product-details.component.html',
  styleUrls: ['./electronics-product-details.component.css']
})
export class ElectronicsProductDetailsComponent implements OnInit {
  
  product!:Electronics;
  images!:string[];
  currentImg!:string;
  constructor(private activatedRoute:ActivatedRoute, private elecProductsService:ElecProductsService,private authGuardService:AuthGuardService,private router:Router) { }
  idForRouting = 0;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.idForRouting = Number(param.get('id'));

    })
    this.productList = this.elecProductsService.getAllProducts();
    this.product = this.getProduct();
    this.images = this.product.images.split(" ");
    this.currentImg = this.images[0];
  }
  productList!:Electronics[];
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
