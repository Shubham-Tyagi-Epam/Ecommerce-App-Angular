import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ElecProductsService } from '../services/elec-products.service';
import { KidsFashionService } from '../services/kids-fashion.service';
import { MensFashionService } from '../services/mens-fashion.service';
import { WomenFashionService } from '../services/women-fashion.service';
import 'animate.css';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, DoCheck {
  @Input('productType') productType!: string;
  colValue: string = 'col-lg-4';
  threeColActive = true;
  fourColActive = false;
  gridValue: number = 3;
  imgHeight: number = 23;
  constructor(
    private elecProductsService: ElecProductsService,
    private mensFashionService: MensFashionService,
    private womenFashionService: WomenFashionService,
    private kidsFashionService: KidsFashionService
  ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.productType == 'Electronics')
      this.products = this.elecProductsService.getElecProducts();
    else if (this.productType == 'MensFashion') {
      this.products = this.mensFashionService.getElecProducts();
    } else if (this.productType == 'WomenFashion')
      this.products = this.womenFashionService.getElecProducts();
    else if (this.productType == 'KidsFashion')
      this.products = this.kidsFashionService.getElecProducts();
  }

  products: any[] = [];

  onChangeLayout(n: number): void {
    this.gridValue = n;
    if (n === 4) {
      this.colValue = `col-lg-4`;
      this.threeColActive = true;
      this.fourColActive = false;
      this.imgHeight = 23;
    } else {
      this.colValue = `col-lg-3`;
      this.threeColActive = false;
      this.fourColActive = true;
      this.imgHeight = 17;
    }
  }
}
