import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Customer';
import { Cart } from '../Cart';
import { Profile } from '../Profile';
import { Order } from '../Order';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
    baseURL = "http://localhost:8001/";
    mailerBaseURL = "http://localhost:3001/";
  
  getAllFashionProducts(){
    let url = this.baseURL + "getAllFashionProducts";
    return this.http.get(url);
  }

  getAllElectronicsProducts(){
    let url = this.baseURL + "getAllElectronicsProducts";
    return this.http.get(url);
  }

  registerCustomer(custObj:Customer){
    let url = this.baseURL + "register";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(custObj);
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }

  loginCustomer(id:string,pwd:string){
    let custLoginObj = {
      id : Number(id),
      pwd : pwd
    }
    let url = this.baseURL + "login";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(custLoginObj);
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
  getCartProd(id:number){
    let url = this.baseURL + "CartProductsForUser/" + String(id);
    return this.http.get(url)
  }
  insertCartProduct(cartObj:Cart){
    let url = this.baseURL + "insertCartProduct";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(cartObj);
    console.log(body);
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }

  deleteCartProduct(cartObj:Cart){
    let url = this.baseURL + `deleteCartItem/${cartObj.c_id}/${cartObj.p_id}/${cartObj.p_tab}`;
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(cartObj);
    return this.http.delete(url,{responseType:'text'})
  }

  updateCartProduct(cartObj:Cart){
    let url = this.baseURL + "updateCartProduct";
    let body = JSON.stringify(cartObj);
    let header = {'content-type':'application/json'};
    return this.http.put(url,body,{'headers':header,responseType:'text'});
  }

  sendOrderPlacedMail(name:string,email:string){
    let url = this.mailerBaseURL + "send";
    let body = JSON.stringify({"name":name,"email":email});
    let header = {'content-type':'application/json'};
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }

  insertProfile(profileObj:Profile){
    let url = this.baseURL + "insertProfile";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(profileObj);
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }

  getProfileById(id:number){
    let url = this.baseURL + "profileDetails/" + String(id);
    return this.http.get(url);
  }
  
  updateProfile(profileObj:Profile){
    let url = this.baseURL + "updateProfile";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(profileObj);
    return this.http.put(url,body,{'headers':header,responseType:'text'});
  }
  
  getOrders(id:number){
    let url = this.baseURL + "getAllCustomerOrders/" + String(id);
    return this.http.get(url)
  }
  
  insertOrder(orderObj:Order){
    let url = this.baseURL + "insertOrder";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify(orderObj);
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }

  getAllOrders(){
      let url = this.baseURL + "getAllOrders"
      return this.http.get(url)
  }

  updateOrderStatus(orderObj:Order){
    let url = this.baseURL + "updateOrderStatus";
    let header = {'content-type':'application/json'};
    let body = JSON.stringify({"id":orderObj.id,"status":orderObj.status});
    return this.http.put(url,body,{'headers':header,responseType:'text'});
  }
}
