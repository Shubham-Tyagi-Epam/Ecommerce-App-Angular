import { Injectable } from '@angular/core';
import { Fashion } from './Fashion';

@Injectable({
  providedIn: 'root'
})
export class KidsFashionService {

  constructor() { }
  products:Fashion[] = [{
    title: "Nike Kids Boy's Club Fleece Full Zip Hoodie",
    category: 'Kids Fashion',
    images: 'https://m.media-amazon.com/images/I/71dmq0nQm9L._UL1500_.jpg',
    brand: 'Nike',
    price: 854,
    stars: 5,
    id: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Aditya Birla Fashion and Retail Limited',
    weight : '350 g',
    dimensions : '15 x 15 x 3',
    genericName : 'Kids Hoodie'
  }, {
    title: "Adidas Boy's Regular fit T-Shirt",
    category: 'Kids Fashion',
    images: 'https://m.media-amazon.com/images/I/91meW1bYBJL._UL1500_.jpg',
    brand: 'Adidas',
    price: 900.23,
    stars: 4,
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'adidas india pvt ltd',
    weight : '450 g',
    dimensions : '65 x 46 x 2',
    genericName : 'Kids T-Shirt'
  },{
    title: "Allen Solly Junior Boy's Checkered Regular fit Shirt",
    category: 'Kids Fashion',
    images: 'https://m.media-amazon.com/images/I/61BtjMzXi1L._UL1500_.jpg',
    brand: 'Allen Solly',
    price: 1750.67443,
    stars: 4,
    id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Allen Solly India Pvt Ltd',
    weight : '250 g',
    dimensions : ' 10 x 2 x 2.7',
    genericName : 'Kids T-Shirt'
  },{
    title: "Puma Girls Runtrain Tee,Black",
    category: 'Kids Fashion',
    images: 'https://m.media-amazon.com/images/I/41CvecTbAeL._UL1100_.jpg',
    brand: 'Puma',
    price: 554.3434443,
    stars: 2,
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Nike India Pvt Ltd',
    weight : '100 g',
    dimensions : '25 x 20 x 2',
    genericName : 'Kids T-Shirt'
  },{
    title: "Allen Solly Junior Boy's Plain Regular fit Shirt",
    category: 'Kids Fashion',
    images: 'https://m.media-amazon.com/images/I/81FqbSzjCeL._UX569_.jpg',
    brand: 'Allen Solly',
    price: 1500.567,
    stars: 5,
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    manufacturer  : 'Allen Solly India pvt ltd',
    weight : '350 g',
    dimensions : '36.7 x 27.61 x 6.1',
    genericName : 'Kids Shirt'
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
