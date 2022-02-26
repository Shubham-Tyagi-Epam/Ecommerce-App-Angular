import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ElecProductsService } from '../elec-products.service';
import { KidsFashionService } from '../kids-fashion.service';
import { KidsFashionComponent } from '../kids-fashion/kids-fashion.component';
import { MensFashionService } from '../mens-fashion.service';
import { WomenFashionService } from '../women-fashion.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,DoCheck{
  @Input('productType') productType!:string;
  constructor(private elecProductsService:ElecProductsService,private mensFashionService:MensFashionService,private womenFashionService:WomenFashionService,private kidsFashionService:KidsFashionService) { }

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    if(this.productType=="Electronics")
      this.products = this.elecProductsService.getElecProducts();
    else if(this.productType=="MensFashion")
    this.products = this.mensFashionService.getElecProducts();
    else if(this.productType=="WomenFashion")
    this.products = this.womenFashionService.getElecProducts();
    else if(this.productType=="KidsFashion")
    this.products = this.kidsFashionService.getElecProducts();
  } 
  
  products:any[] = [];
  
}
