
export class Electronics{
    id!:number;
    title!:string;
    category!:string;
    images!:string[];
    brand!:string;
    price!:number;
    stars!:number;
    cpu!:string;
    camera!: string;
    size!:string;
    weight!:string;
    display!:string;
    battery!:string;
    memory!:string;
    description!:string;

    constructor(id:number,title:string,category:string,images:string[],brand:string,
price:number,stars:number,cpu:string,camera:string,size:string,weight:string,display:string,battery:string,memory:string,description:string){
        this.id = id;
        this.title = title;
        this.category = category;
        this.images = images;
        this.brand = brand;
        this.price = price;
        this.stars = stars;
        this.cpu = cpu;
        this.camera = camera;
        this.size = size;
        this.weight = weight;
        this.display = display;
        this.battery = battery;
        this.memory = memory;
        this.description = description;
    }
}