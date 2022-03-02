import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import {cumulativeOffSet} from '../cumulativeOffset';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnChanges {
  @Input('product') product:any;
  @Input('productType') productType!:string;
  @Input('imgHeight') imgHeight!:number;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private authGuardService:AuthGuardService,private productImageContainer:ElementRef,private cartService:CartService) {
    // this.currentImage  = this.product.images[0];
   }
  
  currentImage!: string;
  currentImageIndex!: number;
  productImageContainerClientWidth!: number;
  offSetLeft!: number;
  offSetTop!: number
  images!:string[];
  ngOnInit(): void {
    // this.currentImage  = this.product.images[0];
    this.images = this.product.images.split(" ");
    console.log("images = " + this.images);
    this.currentImage = this.images[0];

  }

  ngOnChanges(changes: SimpleChanges): void {
      
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
      if(this.productType == "MensFashion" || this.productType == "WomenFashion" || this.productType == "idsFashion"){
        console.log("this.product.pid = ",this.product.id)
        this.cartService.insertCartProduct(this.product.id,"Fashion");
        // alert('Product inserted');
      }
      else{
        this.cartService.insertCartProduct(this.product.id,"E;ectronics");
      }
    }
    else{
      strUrlForRouting = "login";
      this.router.navigate([strUrlForRouting]);
    }
  }

  onImageChange(e:any): void {
    console.log(e);
    const eventType:string = e.type;
    let clientX;
    this.calculateOffSetLeftAndTop(eventType);

    if (eventType === "touchmove") {
      clientX = e.touches[0].clientX;
    } else if (eventType === "mousemove") {
      clientX = e.clientX;
    }

    const currentX = clientX - this.offSetLeft;
    const imgArrLength = this.images.length;

    const part = this.productImageContainerClientWidth / imgArrLength;
    console.log("currentX = " + currentX);
    console.log("part = " + part);
    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= imgArrLength-1) {
      imgIndex = imgArrLength - 1;
    }

    this.currentImageIndex = imgIndex;
    this.currentImage = this.images[imgIndex];
    console.log("index = " + imgIndex);
  }

  onImageMouseOut(e:any): void {
    this.currentImage = this.images[0];
  }
  
  
  onChangeImage(n: number): void {
    this.currentImage = this.images[n];
  }
  
  calculateOffSetLeftAndTop(eventType:string): void {
    const offSetTopAndLeft = cumulativeOffSet(this.productImageContainer.nativeElement, eventType);
    this.offSetLeft = offSetTopAndLeft.left;
    this.offSetTop = offSetTopAndLeft.top;
    this.productImageContainerClientWidth = 250;
    // console.log("productImage container = " + this.productImageContainer.nativeElement.clientWidth)
  }

}
