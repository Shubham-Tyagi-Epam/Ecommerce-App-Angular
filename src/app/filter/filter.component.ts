import { PathLocationStrategy } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ElecProductsService } from '../elec-products.service';
import { KidsFashionService } from '../kids-fashion.service';
import { MensFashionService } from '../mens-fashion.service';
import { WomenFashionService } from '../women-fashion.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('productType') productType!:string;

  constructor(private elecProductService:ElecProductsService,private mensFashionService:MensFashionService,private womenFashionService:WomenFashionService, private kidsFashionService:KidsFashionService) { }
  brands:string[]=[];
  productList:any[]=[];
  checkedBrands:any[] = [];
  checkedStars:any[] = [];

  ngOnInit(): void {
    this.getProductList();
    for(let product of this.productList){
      this.brands.push(product.brand);
    }
    this.brands = this.brands.filter(function (x:string, i:number, a:string[]) { 
      return a.indexOf(x) === i; 
    });
  }
  getProductList(){
    if(this.productType == "Electronics"){
      
    this.productList = this.elecProductService.getElecProducts();
    console.log("Electronics");
    console.log(this.productList);
    }
    else if(this.productType == "MensFashion"){
    this.productList = this.mensFashionService.getElecProducts();
    
    console.log("mens fashion");
    console.log(this.productList);
    }
    else if(this.productType == "WomenFashion"){
      this.productList = this.womenFashionService.getElecProducts();
      
      console.log("Women fashion");
      console.log(this.productList);
      }
    else if(this.productType == "KidsFashion"){
        this.productList = this.kidsFashionService.getElecProducts();
        
        console.log("Kids fashion");
        console.log(this.productList);
        }

  }
  priceRangeFilter(inp1:string,inp2:string){
    if(this.productType == "Electronics"){
      this.elecProductService.priceRangeFilter(Number(inp1),Number(inp2));
    }
    else if(this.productType == "MensFashion"){
      this.mensFashionService.priceRangeFilter(Number(inp1),Number(inp2));
    }
    else if(this.productType == "WomenFashion"){
      this.womenFashionService.priceRangeFilter(Number(inp1),Number(inp2));
    }
    else if(this.productType == "KidsFashion"){
      this.kidsFashionService.priceRangeFilter(Number(inp1),Number(inp2));
    }
      console.log(inp1,inp2);
  }
 
  onChangeBrandsSelectEvent(e:any){
    let name = e.target.name;
    let value = e.target.checked;
    if(value){
      this.addBrand(name);
    }
    else{
      this.removeBrand(name);
    }
    if(this.productType == "Electronics"){
      this.elecProductService.brandsFilter(this.checkedBrands);
    }
    else if(this.productType == "MensFashion"){
      this.mensFashionService.brandsFilter(this.checkedBrands);
    }
    else if(this.productType == "WomenFashion"){
      this.womenFashionService.brandsFilter(this.checkedBrands);
    }
    else if(this.productType == "KidsFashion"){
      this.kidsFashionService.brandsFilter(this.checkedBrands);
    }
    console.log("hello");
    console.log()
  }

  addBrand(addBrandName:string){
    this.checkedBrands.push(addBrandName);
  }

  removeBrand(removeBrandName:string){
    this.checkedBrands = this.checkedBrands.filter((brand)=>(brand!=removeBrandName));
  }

  onChangeStarsSelectEvent(e:any){
    let name = e.target.name;
    let value = e.target.checked;
    if(value){
      this.addStar(name);
    }
    else{
      this.removeStar(name);
    }
    if(this.productType == "Electronics"){
      this.elecProductService.starsFilter(this.checkedStars);
    }
    else if(this.productType == "MensFashion"){
      this.mensFashionService.starsFilter(this.checkedStars);
    }
    else if(this.productType == "WomenFashion"){
      this.womenFashionService.starsFilter(this.checkedStars);
    }
    else if(this.productType == "KidsFashion"){
      this.kidsFashionService.starsFilter(this.checkedStars);
    }
  }

  addStar(addStarVal:string){
    this.checkedStars.push(addStarVal);
  }
  removeStar(removeStarVal:string){
    this.checkedStars = this.checkedStars.filter((star)=>(star!=removeStarVal));
  }

  titleSearch(searchString:string){
    if(this.productType == "Electronics"){
      this.elecProductService.titleFilter(searchString);;
    }
    else if(this.productType == "MensFashion"){
      this.mensFashionService.titleFilter(searchString);;
    }
    else if(this.productType == "WomenFashion"){
      this.womenFashionService.titleFilter(searchString);;
    }
    else if(this.productType == "KidsFashion"){
      this.kidsFashionService.titleFilter(searchString);;
    }
  }

}


