import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateEmail } from '../EmailValidator';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router) { }
  registerFormReactive!:FormGroup;

  ngOnInit(): void {
    this.registerFormReactive = new FormGroup({
      uidReactive : new FormControl('',[Validators.required, Validators.minLength(4)]),
      pwdReactive : new FormControl('',[Validators.required, Validators.minLength(4)]),
      nameReactive : new FormControl('',[Validators.required, Validators.minLength(3)]),
      locationReactive : new FormControl('',[Validators.required, Validators.minLength(3)]),
      emailReactive : new FormControl('',[Validators.required, Validators.minLength(7),ValidateEmail]),
    });
  }


  // add(id:string,name:string,location:string,email:string,password:string){
  //   this.registerService.add(id,name,location,email,password);
  // }
  add(){
    if(this.uidReactive?.value=="" || this.emailReactive?.value=="" || this.nameReactive?.value=="" || this.locationReactive?.value=="" || this.pwdReactive?.value==""){
      alert("Registration unsuccesful");
      return
    }
    this.registerService.add(
      this.registerFormReactive.get(['uidReactive'])?.value,
      this.registerFormReactive.get(['nameReactive'])?.value,
      this.registerFormReactive.get(['locationReactive'])?.value,
      this.registerFormReactive.get(['emailReactive'])?.value,
      this.registerFormReactive.get(['pwdReactive'])?.value
    );
    console.log(this.registerService.Users);
    alert("Registration Succesful");
    this.router.navigateByUrl('/login');
  }

  get uidReactive(){
    return this.registerFormReactive.get('uidReactive');
  }

  get pwdReactive(){
    return this.registerFormReactive.get('pwdReactive');
  }

  get locationReactive(){
    return this.registerFormReactive.get('locationReactive');
  }

  get emailReactive(){
    return this.registerFormReactive.get('emailReactive');
  }

  get nameReactive(){
    return this.registerFormReactive.get('nameReactive');
  }

}
