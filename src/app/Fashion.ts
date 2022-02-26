export class Fashion {
    id!:number;
    category!:string;
    title!:string;
    images!:string;
    brand!:string;
    price!:number;
    stars!:number;
    description!:string;
    manufacturer!:string;
    weight!:string;
    dimensions!:string;
    genericName!:string;

    constructor(id:number,category:string,title:string,images:string,brand:string,price:number,stars:number,description:string,manufacturer:string,weight:string,dimensions:string,genericName:string){
        this.id = id;
        this.category = category;
        this.title = title;
        this.images = images;
        this.brand = brand;
        this.price = price;
        this.stars = stars;
        this.description = description;
        this.manufacturer = manufacturer;
        this.weight = weight;
        this.dimensions = dimensions;
        this.genericName = genericName;
    }
}