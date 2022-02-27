import { Injectable } from '@angular/core';
import { Fashion } from '../Fashion';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class KidsFashionService {

  constructor(private restService:RestService) {
    this.getElecProduct();
   }
  

  dupProducts:Fashion[] = [];
  products:Fashion[] = [];
  allProducts:Fashion[] = [];
  
  getElecProducts(){
    return this.dupProducts;
  }
  getAllProducts(){
    return this.allProducts;
  }
  getElecProduct(){
    // return this.dupProducts;
    console.log("Called again");
    console.log("geee");
    this.restService.getAllFashionProducts().subscribe({
      next : (data:any)=>{
        console.log("subscribe data ");
        console.log(data);
        this.dupProducts = data;
        this.products = data;
        this.allProducts = data;
        this.dupProducts = this.dupProducts.filter((p)=>{
          return p.category == "Kids Fashion";
        })
        this.products = this.products.filter((p)=>{
          return p.category == "Kids Fashion";
        })
        console.log("products  = "  )
        console.log(this.dupProducts)
      },
      error : (err)=>{
          console.log("connot retrieve data : " + err.error);
      }
    });
  }

  priceRangeFilter(lower:number,higher:number){
    if(lower == 0 && higher == 0)
      this.dupProducts = this.products;
    else{
      this.dupProducts = this.products.filter((product)=>{return product.price<=higher && product.price>=lower});
    }
  }

  brandsFilter(checkedBrands:any[]){
    if(checkedBrands.length == 0)
      this.dupProducts = this.products;
    else{
      this.dupProducts = this.products.filter((product)=>(checkedBrands.indexOf(product.brand)!=-1));
    }
  }

  starsFilter(checkedStars:any[]){
    if(checkedStars.length == 0)
      this.dupProducts = this.products;
    else{
      this.dupProducts = this.products.filter((product)=>(checkedStars.indexOf(String(product.stars))!=-1));
    }
  }

  titleFilter(title:string){
    if(title.length == 0)
      this.dupProducts = this.products;
    else{
      this.dupProducts = this.products.filter((product)=>(product.title.toLowerCase().includes(title.toLowerCase())));
    }
  }
}
