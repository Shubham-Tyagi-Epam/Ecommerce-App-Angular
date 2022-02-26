import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') product:any;
  @Input('productType') productType!:string;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private authGuardService:AuthGuardService) { }
  
  ngOnInit(): void {
  }
  
  routeForProduct(){
    let strUrlForRouting = "";
    if(this.productType == "Electronics")
      strUrlForRouting = "electronics/details/" + this.product.id;
    else if(this.productType == "MensFashion"){
      strUrlForRouting = "mensfashion/details/" + this.product.id;
    }
    else if(this.productType == "WomenFashion"){
      strUrlForRouting = "womenfashion/details/" + this.product.id;
    }
    else if(this.productType == "KidsFashion"){
      strUrlForRouting = "kidsfashion/details/" + this.product.id;
    }
    console.log(this.productType);  
    this.router.navigate([strUrlForRouting]);
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
}
