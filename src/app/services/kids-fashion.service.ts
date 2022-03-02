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
  checkedBrands:any[] = [];
  lowerLimit:number = 0;
  upperLimit:number = 0;
  checkedStars:any[]=[];
  titleSearch:string = "";

  getElecProducts(){
    return this.dupProducts;
  }
  getAllProducts(){
    return this.allProducts;
  }
  setProducts(){
    this.dupProducts = this.products;
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
 prf(lower:number,higher:number){
    if(higher != 0 && lower<higher){
      this.dupProducts = this.dupProducts.filter((product)=>{return product.price<=higher && product.price>=lower});
    }
  }
  priceRangeFilter(lower:number,higher:number){
    this.lowerLimit = lower;
    this.upperLimit = higher;
    this.dupProducts = this.products;
    this.filterAll();
    // if(lower == 0 && higher == 0)
    //   this.dupProducts = this.products;
   
  }
 bf(checkedBrands:any[]){
  if(checkedBrands.length != 0){
    this.dupProducts = this.dupProducts.filter((product)=>(checkedBrands.indexOf(product.brand)!=-1));
  }
 }
  brandsFilter(checkedBrands:any[]){
    this.checkedBrands = checkedBrands;
    // if(checkedBrands.length == 0)
    //   this.dupProducts = this.products;
    this.dupProducts = this.products;
    this.filterAll();
  }
  sf(checkedStars:any[]){
    if(checkedStars.length != 0){
      this.dupProducts = this.dupProducts.filter((product)=>(checkedStars.indexOf(String(product.stars))!=-1));
    }
  }
  starsFilter(checkedStars:any[]){
    this.checkedStars = checkedStars;
    // if(checkedStars.length == 0)
    //   this.dupProducts = this.products;
    this.dupProducts = this.products;
    this.filterAll();
  }
  tf(title:string){
    if(title.length != 0){
      this.dupProducts = this.dupProducts.filter((product)=>(product.title.toLowerCase().includes(title.toLowerCase())));
    }
  }
  titleFilter(title:string){
    this.titleSearch = title;
    // if(title.length == 0)
    //   this.dupProducts = this.products;
    this.dupProducts = this.products;
    this.filterAll();
  }

  filterAll(){
    this.prf(this.lowerLimit,this.upperLimit);
    this.bf(this.checkedBrands);
    this.sf(this.checkedStars);
    this.tf(this.titleSearch);
  }
}
