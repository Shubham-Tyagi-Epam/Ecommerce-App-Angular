import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

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
      this.Users.push({"id":id,"name":name,"location":location,"email":email,"pwd":password})
    }
}
