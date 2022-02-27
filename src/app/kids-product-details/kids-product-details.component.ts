import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { KidsFashionService } from '../services/kids-fashion.service';
import { PriceFormatterPipe } from '../pipes/price-formatter.pipe';
import { Fashion } from '../Fashion';

@Component({
  selector: 'app-kids-product-details',
  templateUrl: './kids-product-details.component.html',
  styleUrls: ['./kids-product-details.component.css']
})
export class KidsProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private kidsFashionService:KidsFashionService,private authGuardService:AuthGuardService,private router:Router) { }
  idForRouting = 0;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.idForRouting = Number(param.get('id'));

    })
    this.productList = this.kidsFashionService.getAllProducts();
  }
  productList!:Fashion[];
  // product!:any;
  get product(){
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
}
