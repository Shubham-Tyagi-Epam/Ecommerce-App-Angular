import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {

  constructor(private authGuardService:AuthGuardService,private authentificationService:AuthentificationService) { }
  loggedin!:boolean;
  varIsLoggedIn = "isLoggedIn";
  ngOnInit(): void {
      this.checkActivate();
  }

  ngDoCheck(): void {
    if(localStorage.getItem(this.varIsLoggedIn) == 'false')
      this.loggedin = false;
    else
      this.loggedin = true;
    console.log("loggdin ? " + this.loggedin)

  }

  checkActivate(){
  }

  logout(){
    this.authentificationService.logout();
  }

}
