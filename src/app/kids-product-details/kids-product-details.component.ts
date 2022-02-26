import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { KidsFashionService } from '../kids-fashion.service';

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
  }
  productList = this.kidsFashionService.getElecProducts();
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
