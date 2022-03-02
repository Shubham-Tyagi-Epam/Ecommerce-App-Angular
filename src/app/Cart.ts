export class Cart{
    
    id!:number;
    p_id!:number;
    c_id!:number;
    p_tab!:string;
    p_qty!:number;
    constructor(id:number,c_id:number,p_id:number,p_tab:string,p_qty:number){
        this.id = id;
        this.c_id = c_id;
        this.p_id = p_id;
        this.p_tab = p_tab;
        this.p_qty = p_qty;
    }
}