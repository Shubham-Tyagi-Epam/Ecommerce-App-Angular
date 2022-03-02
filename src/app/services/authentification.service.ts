import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  varIsLoggedIn = "isLoggedIn";
  varCustId = "custId";
  login(id:number){
    localStorage.setItem(this.varIsLoggedIn,"true");
    localStorage.setItem(String(this.varCustId),String(id));
  }
  logout(){
    localStorage.setItem(this.varIsLoggedIn,"false");
    localStorage.setItem(String(this.varCustId),String(0));
  }
}
