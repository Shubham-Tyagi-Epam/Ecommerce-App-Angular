export class Customer{
    id!:number;
    pwd!:string;
    name!:string;
    email!:string;
    location!:string;

    constructor(id:number,pwd:string,name:string,email:string,location:string){ 
        this.id = id;
        this.pwd = pwd;
        this.name = name;
        this.email = email;
        this.location = location;
    }
}