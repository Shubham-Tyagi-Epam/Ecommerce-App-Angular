import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DoCheck {

  constructor(private registerService:RegisterService,private router:Router,private authentificationService:AuthentificationService) { }
  registeredUsers:any[] = [];
  loginFormReactive!:FormGroup;
  ngOnInit(): void {
    this.loginFormReactive = new FormGroup({
      uidReactive : new FormControl('',[Validators.required, Validators.minLength(4)]),
      pwdReactive : new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }

  ngDoCheck(): void {
      this.registeredUsers = this.registerService.Users;
  }

  login(){
    if(this.uidReactive?.value=="" || this.pwdReactive?.value==""){
      alert("Login unsuccesful");
      return
    }
    for(let u of this.registeredUsers){
      if(u.id == this.loginFormReactive.get('uidReactive')?.value && u.pwd == this.loginFormReactive.get('pwdReactive')?.value){
        alert("Login Succesful");
       this.router.navigate(["/home"]);
        this.authentificationService.login();
        return;
      }
    }
    alert("Login Unsuccesful");
  }

  get uidReactive(){
    return this.loginFormReactive.get('uidReactive');
  }

  get pwdReactive(){
    return this.loginFormReactive.get('pwdReactive');
  }
  

}
