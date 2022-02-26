import { Injectable } from '@angular/core';
import { Fashion } from './Fashion';

@Injectable({
  providedIn: 'root'
})
export class WomenFashionService {

  constructor() { }
  products:Fashion[] = [{
    title: "Adidas Women's Loose Fit T-Shirt",
    category: 'Women Fashion',
    images: 'https://m.media-amazon.com/images/I/71Viush8QBL._UL1500_.jpg',
    brand: 'Adidas',
    price: 854,
    stars: 5,
    id: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Aditya Birla Fashion and Retail Limited',
    weight : '350 g',
    dimensions : '15 x 15 x 3',
    genericName : 'Women Shirt'
  }, {
    title: "Adidas Women's Regular T-Shirt",
    category: 'Women Fashion',
    images: 'https://m.media-amazon.com/images/I/61I6xpGFQpL._UL1500_.jpg',
    brand: 'Adidas',
    price: 900.23,
    stars: 4,
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'adidas india pvt ltd',
    weight : '450 g',
    dimensions : '65 x 46 x 2',
    genericName : 'T-Shirt'
  },  {
    title: "Nike Women's Regular T-Shirt",
    category: 'Women Fashion',
    images: 'https://m.media-amazon.com/images/I/71FpxUIwmYL._UL1500_.jpg',
    brand: 'Nike',
    price: 1254.3434443,
    stars: 2,
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Nike India Pvt Ltd',
    weight : '200 g',
    dimensions : '25 x 20 x 2',
    genericName : 'T-Shirt'
  },{
    title: "Nike Women Sports Hoodie",
    category: 'Women Fashion',
    images: 'https://m.media-amazon.com/images/I/81UBNh4qG5L._UL1500_.jpg',
    brand: 'Nike',
    price: 1500,
    stars: 5,
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Nike India pvt ltd',
    weight : '350 g',
    dimensions : '36.7 x 27.61 x 6.1',
    genericName : 'Sports Hoodie'
  },{
    title: "PUMA Women WMN Graphic Jacket",
    category: 'Women Fashion',
    images: 'https://m.media-amazon.com/images/I/51DB441b03L._UL1100_.jpg',
    brand: 'Puma',
    price: 1750.67443,
    stars: 4,
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Puma India Pvt Ltd',
    weight : '250 g',
    dimensions : ' 10 x 2 x 2.7',
    genericName : 'T-Shirt'
  }];

  dupProducts:any[] = this.products;
  getElecProducts(){
    return this.dupProducts;
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
