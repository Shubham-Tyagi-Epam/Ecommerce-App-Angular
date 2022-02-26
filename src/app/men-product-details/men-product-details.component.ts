import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { MensFashionService } from '../mens-fashion.service';

@Component({
  selector: 'app-men-product-details',
  templateUrl: './men-product-details.component.html',
  styleUrls: ['./men-product-details.component.css']
})
export class MenProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private mensFashionService:MensFashionService,private authGuardService:AuthGuardService,private router:Router) { }
  idForRouting = 0;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.idForRouting = Number(param.get('id'));

    })
  }
  productList = this.mensFashionService.getElecProducts();
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
