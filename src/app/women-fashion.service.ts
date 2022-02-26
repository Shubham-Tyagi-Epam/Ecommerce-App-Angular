import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WomenFashionService {

  constructor() { }
  products = [{
    title: "Adidas Women's Loose Fit T-Shirt",
    category: 'Women Fashion',
    images: ['https://m.media-amazon.com/images/I/71Viush8QBL._UL1500_.jpg', 'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1'],
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
    images: ['https://m.media-amazon.com/images/I/61I6xpGFQpL._UL1500_.jpg', 'https://productimages.hepsiburada.net/s/21/280-413/9933217628210.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217660978.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217693746.jpg?v1'],
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
    images: ['https://m.media-amazon.com/images/I/71FpxUIwmYL._UL1500_.jpg', 'https://productimages.hepsiburada.net/s/24/280-413/10094991441970.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10094991474738.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10094991507506.jpg?v1'],
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
    images: ['https://m.media-amazon.com/images/I/81UBNh4qG5L._UL1500_.jpg', 'https://productimages.hepsiburada.net/s/19/280-413/9826975940658.jpg?v1', 'https://productimages.hepsiburada.net/s/19/280-413/9826975973426.jpg?v1', 'https://productimages.hepsiburada.net/s/19/280-413/9826976006194.jpg?v1'],
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
    images: ['https://m.media-amazon.com/images/I/51DB441b03L._UL1100_.jpg', 'https://productimages.hepsiburada.net/s/24/280-413/10082391818290.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10082391851058.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10082391883826.jpg?v1'],
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
