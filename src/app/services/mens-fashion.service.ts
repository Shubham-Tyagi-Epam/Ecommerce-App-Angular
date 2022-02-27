import { Injectable } from '@angular/core';
import { Fashion } from '../Fashion';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MensFashionService {
  products:Fashion[] = [];
  constructor(private restService:RestService) {
    this.getElecProduct();
    this.dupProducts = this.products
   }
//   products:Fashion[] = [{
//       title: 'Allen Solly Sweatshirt',
//       category: 'Mens Fashion',
//       images: 'https://m.media-amazon.com/images/I/61HqUGX1DzL._UL1500_.jpg',
//       brand: 'Allen Solly',
//       price: 854,
//       stars: 5,
//       id: 0,
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
//       manufacturer  : 'Aditya Birla Fashion and Retail Limited',
//       weight : '350 g',
//       dimensions : '15 x 15 x 3',
//       genericName : 'Men Shirt'
//   }, {
//     title: 'Nike Men Pullover Sweater',
//     category: 'Mens Fashion',
//     images: 'https://m.media-amazon.com/images/I/81VHSR01FSL._UL1500_.jpg',
//     brand: 'Nike',
//     price: 2500,
//     stars: 4,
//     id: 1,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
//     manufacturer  : 'NIKE INDIA PVT LTD',
//     weight : '450 g',
//     dimensions : '65 x 46 x 2',
//     genericName : 'Pullover Sweater'
//   },  {
//     title: "Allen Solly Men's Regular Fit Polo",
//     category: 'Mens Fashion',
//     images: 'https://m.media-amazon.com/images/I/81RcNGzlIhL._UL1500_.jpg',
//     brand: 'Allen Solly',
//     price: 654.3434443,
//     stars: 5,
//     id: 2,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
//     manufacturer  : 'Aditya Birla Fashion and Retail Limited',
//     weight : '200 g',
//     dimensions : '25 x 20 x 2',
//     genericName : 'T-Shirt'
//   },{
//     title: "Adidas Men's pullover sweater",
//     category: 'Mens Fashion',
//     images: 'https://m.media-amazon.com/images/I/81YQ0VshN5L._UL1500_.jpg',
//     brand: 'Adidas',
//     price: 3000,
//     stars: 5,
//     id: 3,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
//     manufacturer  : 'Adidas india pvt ltd',
//     weight : '350 g',
//     dimensions : '36.7 x 27.61 x 6.1',
//     genericName : 'Pullover Sweater'
//   },{
//     title: "Puma Men's Regular T-Shirt",
//     category: 'Mens Fashion',
//     images: 'https://m.media-amazon.com/images/I/71QrY78nOuL._UL1500_.jpg',
//     brand: 'Allen Solly',
//     price: 750.67443,
//     stars: 4,
//     id: 4,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
//     manufacturer  : 'Puma India Pvt Ltd',
//     weight : '150 g',
//     dimensions : ' 10 x 2 x 2.7',
//     genericName : 'T-Shirt'
//   }
// ];

  productLst:Fashion[] = []
  dupProducts:Fashion[] = [];
  allProducts:Fashion[] = [];
  getElecProducts(){
    return this.dupProducts
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
          return p.category == "Mens Fashion";
        })
        this.products = this.products.filter((p)=>{
          return p.category == "Mens Fashion";
        })
        console.log("products  = "  )
        console.log(this.dupProducts)
      },
      error : (err)=>{
          console.log("connot retrieve data : " + err.error);
      }
    });
  }

  getOriginalProduct(){
    return of(this.products);
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
