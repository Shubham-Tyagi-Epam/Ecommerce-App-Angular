import { Injectable } from '@angular/core';
import { Customer } from '../Customer';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private restService:RestService) { }

  Users:any[] = [
      {
        "id": "Ramesh",
        "name": "Ramesh",
        "email": "ramesh@gmail.com",
        "pwd": "admin",
        "location": "Delhi",
      },
      {
        "id": "Suresh",
        "name": "Suresh",
        "email": "suresh@gmail.com",
        "pwd": "admin",
        "location": "Delhi",
      },
      {
        "id": "Gyanesh",
        "name": "Gyanesh",
        "email": "gyanesh@gmail.com",
        "pwd": "admin",
        "location": "Delhi",
      },
      {
        "id": "Tapesh",
        "name": "Tapesh",
        "email": "tapesh@gmail.com",
        "pwd": "admin",
        "location": "Delhi",
      },
      {
        "id": "Aman",
        "name": "Aman",
        "email": "aman@gmail.com",
        "location": "Kanpur",
        "pwd": "admin"
      }
    ]

    add(id:string,name:string,location:string,email:string,password:string){
      let custObj = new Customer(Number(id),password,name,email,location); 
      // this.Users.push({"id":id,"name":name,"location":location,"email":email,"pwd":password})
      this.restService.registerCustomer(custObj).subscribe({
          next : (data)=>{
            alert("User reistered succesfully");
          },
          error : (err)=>{
            alert(err.error);
          }
      });
    }
}
