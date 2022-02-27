import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Customer';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
    baseURL = "http://localhost:8001/";
  
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
}
