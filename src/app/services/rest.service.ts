import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Customer';
import { Cart } from '../Cart';
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

  sendOrderPlacedMail(){
    let url = this.mailerBaseURL + "send";
    let body = JSON.stringify({"name":"Shubham"});
    let header = {'content-type':'application/json'};
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
}
