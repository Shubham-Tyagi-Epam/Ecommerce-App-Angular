import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecProductsService {

  constructor() { }

  products = [{
    title: 'Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1'],
    brand: 'apple',
    price: 4241.499828399639,
    stars: 5,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }, {
    title: 'Huawei Mate 20 Lite 64 GB (Huawei Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/21/280-413/9933217792050.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217628210.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217660978.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217693746.jpg?v1'],
    brand: 'huawei',
    price: 1823.6625483451157,
    stars: 4,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }, {
    title: 'Huawei P20 Lite 64 GB (Huawei Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/19/280-413/9826975907890.jpg?v1', 'https://productimages.hepsiburada.net/s/19/280-413/9826975940658.jpg?v1', 'https://productimages.hepsiburada.net/s/19/280-413/9826975973426.jpg?v1', 'https://productimages.hepsiburada.net/s/19/280-413/9826976006194.jpg?v1'],
    brand: 'huawei',
    price: 7429.467511354926,
    stars: 4,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }, {
    title: 'Meizu 16TH 64 GB (Meizu Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/24/280-413/10094991409202.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10094991441970.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10094991474738.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10094991507506.jpg?v1'],
    brand: 'meizu',
    price: 5664.265944453384,
    stars: 2,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }, {
    title: 'Meizu X8 64 GB (Meizu Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/25/280-413/10108030091314.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10082391818290.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10082391851058.jpg?v1', 'https://productimages.hepsiburada.net/s/24/280-413/10082391883826.jpg?v1'],
    brand: 'meizu',
    price: 4596.99884783711,
    stars: 4,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }, {
    title: 'Samsung Galaxy A7 2018 64 GB (Samsung Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/22/280-413/9946187399218.jpg?v1', 'https://productimages.hepsiburada.net/s/22/280-413/9946187431986.jpg?v1', 'https://productimages.hepsiburada.net/s/22/280-413/9946187464754.jpg?v1', 'https://productimages.hepsiburada.net/s/22/280-413/9946187497522.jpg?v1'],
    brand: 'samsung',
    price: 4108.082941215698,
    stars: 5,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
  }, {
    title: 'Samsung Galaxy J6 Plus 32 GB (Samsung Türkiye Garantili)',
    category: 'electronics',
    images: ['https://productimages.hepsiburada.net/s/22/280-413/9941129494578.jpg?v1', 'https://productimages.hepsiburada.net/s/22/280-413/9941129527346.jpg?v1', 'https://productimages.hepsiburada.net/s/22/280-413/9941129560114.jpg?v1', 'https://productimages.hepsiburada.net/s/22/280-413/9941129592882.jpg?v1'],
    brand: 'samsung',
    price: 4260.9529075338505,
    stars: 3,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
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
