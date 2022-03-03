export class Profile{
    id!:number;
    name!:string;
    age!:number;
    email!:string;
    address!:string;
    phone!:string;

    constructor(id:number,name:string,age:number,email:string,address:string,phone:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}


