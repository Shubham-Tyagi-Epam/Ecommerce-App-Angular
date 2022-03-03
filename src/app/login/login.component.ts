import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { RegisterService } from '../services/register.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DoCheck {

  constructor(private registerService:RegisterService,private router:Router,private authentificationService:AuthentificationService,private restSerice:RestService) { }
  registeredUsers:any[] = [];
  loginFormReactive!:FormGroup;
  ngOnInit(): void {
    this.loginFormReactive = new FormGroup({
      uidReactive : new FormControl('',[Validators.required]),
      pwdReactive : new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }

  ngDoCheck(): void {
      // this.registeredUsers = this.registerService.Users;
  }

  login(){
    if(this.uidReactive?.value=="" || this.pwdReactive?.value==""){
      alert("Login unsuccesful");
      return
    }
    // for(let u of this.registeredUsers){
    //   if(u.id == this.loginFormReactive.get('uidReactive')?.value && u.pwd == this.loginFormReactive.get('pwdReactive')?.value){
    //     alert("Login Succesful");
    //    this.router.navigate(["/home"]);
    //     this.authentificationService.login();
    //     return;
    //   }
    // }
    this.restSerice.loginCustomer(this.loginFormReactive.get('uidReactive')?.value,this.loginFormReactive.get('pwdReactive')?.value).subscribe({
      next : (data)=>{
        this.authentificationService.login(this.loginFormReactive.get('uidReactive')?.value);
        alert("Login Succesfull");
        this.router.navigate(["/home"]);
      },
      error : (err)=>{
        alert(err.error);
      }
    });
  }

  get uidReactive(){
    return this.loginFormReactive.get('uidReactive');
  }

  get pwdReactive(){
    return this.loginFormReactive.get('pwdReactive');
  }
  

}
