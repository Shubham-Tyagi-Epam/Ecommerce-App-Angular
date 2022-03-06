import { Component, DoCheck, OnInit } from '@angular/core';
import { Electronics } from '../Electronics';
import { Fashion } from '../Fashion';
import { Order } from '../Order';
import { Profile } from '../Profile';
import { ElecProductsService } from '../services/elec-products.service';
import { MensFashionService } from '../services/mens-fashion.service';
import { OrderService } from '../services/order.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit,DoCheck {
  varCustId = "custId";
  c_id:any = localStorage.getItem(this.varCustId);
  constructor(private profileService:ProfileService,private orderService:OrderService, private fashionProdService:MensFashionService,private elecProdService:ElecProductsService) { }
  profile!:Profile;
  orders!:Order[];
  fashionProducts:Fashion[] = [];
  elecProducts:Electronics[] = [];
  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
    console.log(this.orders )
    this.profile = this.profileService.getProfileData();
  }
  ngDoCheck(): void {
      this.profile = this.profileService.getProfileData();
      console.log(this.profile)
      this.orders = this.orderService.getOrders();
      console.log(this.orders)
      this.fashionProducts = this.fashionProdService.getAllProducts();
      this.elecProducts = this.elecProdService.getAllProducts();
  }

  submit(id:string,name:string,age:string,address:string,email:string,phone:string){
    let profileObj = new Profile(this.profile.id,name,Number(age),email,address,phone)
    this.profileService.updateProfile(profileObj);
  }

  findProduct(order:Order):any{
    console.log("inside find product");
    console.log(order.p_tab);
    let product:any;
    if(order.p_tab == "Fashion"){
      
      for(let p of this.fashionProducts){
        if(p.id == order.p_id){
          product = p;
          return product;
        }
      }
    }
    else{
      for(let p of this.elecProducts){
        if(p.id == order.p_id){
          product = p;
          return product;
        }
      }
    }
    return this.fashionProducts[0];
  }

  getTableColor(order:Order){
    if(order.status == "Placed")
      return "table-secondary";
    else if(order.status == "Shipped")
      return "table-primary";
    return "table-success"
  }
}
