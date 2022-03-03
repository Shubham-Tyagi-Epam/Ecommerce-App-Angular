var express = require('express');
var Sequelize = require('sequelize');
var db = require('./db.config');
var app = express();
var cors = require('cors');
app.use(cors());

const sequelize = new Sequelize(db.DB,db.USER,db.PASSWORD,{
    host:db.HOST,
    dialect  : db.dialect,
    pool:{
        max : db.pool.max,
        min : db.pool.min,
        acquire : db.pool.acquire,
        idle : db.pool.idle
    } 
 });

// ------------------------------------------
// Fashion Table
// ------------------------------------------


 let fashionTable = sequelize.define('fashionSequelize',{
    id : {
        primaryKey : true,
        type : Sequelize.INTEGER
    },
    title : Sequelize.STRING,
    category : Sequelize.STRING,
    images : Sequelize.STRING(2234),
    brand : Sequelize.STRING,
    price : Sequelize.FLOAT,
    stars : Sequelize.INTEGER,
    description : Sequelize.STRING,
    manufacturer : Sequelize.STRING,
    weight : Sequelize.STRING,
    dimensions : Sequelize.STRING,
    genericName : Sequelize.STRING
    },{
        timestamps : false,
        freezeTableName : true
    }
);

fashionTable.sync().then(()=>{
    console.log("Connected with the table fashionSequelize");
}).catch((err)=>{
    console.log("Unable to create/connect with the table fashionSequelize...");
});

app.get("/getAllFashionProducts",(req,res)=>{
    fashionTable.findAll({raw:true}).then((data)=>{
        console.log("Data from the Fashion table fetched succesfully");
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("Error occured while fetching the data");
        res.status(401).send(err);
    });
}
);

app.use(express.json());

app.post("/insertFashionProduct",(req,res)=>{
    id_param = req.body.id;
    title_param = req.body.title;
    category_param = req.body.category;
    images_param = req.body.images;
    brand_param = req.body.brand;
    price_param = req.body.price;
    stars_param = req.body.stars;
    description_param = req.body.description;
    manufacturer_param = req.body.manufacturer;
    weight_param = req.body.weight;
    dimensions_param = req.body.dimensions;
    genericName_param = req.body.genericName;
    fashionTable.create({
        id : id_param,
        title : title_param,
        category : category_param,
        images : images_param,
        brand : brand_param,
        price : price_param,
        stars : stars_param,
        description : description_param,
        manufacturer : manufacturer_param,
        weight : weight_param,
        dimensions : dimensions_param,
        genericName : genericName_param,
    }).then((data)=>{
        let str = "Product inserted succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Error while inserting"; 
        console.log(str);
        res.status(400).send(str);
    });
});

app.put("/updateFashionProduct",(req,res)=>{
    id_param = req.body.id;
    title_param = req.body.title;
    category_param = req.body.category;
    images_param = req.body.images;
    brand_param = req.body.brand;
    price_param = req.body.price;
    stars_param = req.body.stars;
    description_param = req.body.description;
    manufacturer_param = req.body.manufacturer;
    weight_param = req.body.weight;
    dimensions_param = req.body.dimensions;
    genericName_param = req.body.genericName;

    fashionTable.update({
        title : title_param,
        category : category_param,
        images : images_param,
        brand : brand_param,
        price : price_param,
        stars : stars_param,
        description : description_param,
        manufacturer : manufacturer_param,
        weight : weight_param,
        dimensions : dimensions_param,
        genericName : genericName_param
    },{where:{id:id_param}}).then((data)=>{
        let str = "Record updated succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not there in the table"; 
        console.log(str);
        res.status(404).send(str);
    });
}
);

app.delete("/deleteFashionProduct/:id",(req,res)=>{
    param_id = req.params.id;
    fashionTable.destroy({where:{id:param_id}}).then((data)=>{
        str = "Record Deleted Succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not present in the table";
        console.log(str);
        res.status(404).send(str);
    });
});

// ------------------------------------------
// Customers Table
// ------------------------------------------

let customerTable = sequelize.define('customerSequelize',{
    id : {
        primaryKey : true,
        type : Sequelize.INTEGER
    },
    pwd : Sequelize.STRING,
    name : Sequelize.STRING,
    email : Sequelize.STRING,
    location : Sequelize.STRING,

    },{
        timestamps : false,
        freezeTableName : true
    }
);
customerTable.sync().then(()=>{
    console.log("Connected with the table customerSequelize");
}).catch((err)=>{
    console.log("Unable to create/connect with the table customersequelize...");
});

app.post("/register",(req,res)=>{
    // res.send("sdsd" + JSON.stringify(req.body));
    id_param = req.body.id;
    pwd_param = req.body.pwd;
    name_param = req.body.name;
    email_param = req.body.email;
    location_param = req.body.location;
    
    let custObj = customerTable.build({
        id : id_param,
        pwd : pwd_param,
        name : name_param,
        email : email_param,
        location : location_param
    });
    
    custObj.save().then((data)=>{
            let str = "Customer Registered Succesfully";
            console.log(str);
            res.status(201).send(str);
    }).catch((err)=>{
        let str = "Customer with the same ID already registered with the app";
        console.log(str +err); 
        res.status(404).send(str + err);
    });
});

app.post("/login",(req,res)=>{
    // res.send("sdsd" + JSON.stringify(req.body));
    id_param = req.body.id;
    pwd_param = req.body.pwd;
    
    customerTable.findByPk(id_param).then((data)=>{
        if(data.dataValues.pwd == pwd_param)
            res.status(200).send("customer Logged in");
        else 
        res.status(400).send("Enter correct Password");
    }).catch(()=>{
        res.status(404).send("customer ID  Not registered");
    });
});

// ------------------------------------------
// Electronics Table
// ------------------------------------------

let electronicsTable = sequelize.define('electronicSequelize',{
    id : {
        primaryKey : true,
        type : Sequelize.INTEGER
    },
    title : Sequelize.STRING,
    category : Sequelize.STRING,
    images : Sequelize.STRING(1234),
    brand : Sequelize.STRING,
    price : Sequelize.FLOAT,
    stars : Sequelize.INTEGER,
    cpu : Sequelize.STRING,
    camera : Sequelize.STRING,
    size : Sequelize.STRING,
    weight : Sequelize.STRING,
    display : Sequelize.STRING,
    battery : Sequelize.STRING,
    memory : Sequelize.STRING,
    description : Sequelize.STRING
    },{
        timestamps : false,
        freezeTableName : true
    }
);

electronicsTable.sync().then(()=>{
    console.log("Connected with the table electronicSequelize");
}).catch((err)=>{
    console.log("Unable to create/connect with the table electronicsequelize...");
});


app.get("/getAllElectronicsProducts",(req,res)=>{
    electronicsTable.findAll({raw:true}).then((data)=>{
        console.log("Data from the Electronics table fetched succusfully");
        res.status(200).send(data);
    }).catch((err)=>{
        console.log("Error occured while fetching the data");
        res.status(401).send(err);
    });
}
);


app.post("/insertElectronicsProduct",(req,res)=>{
    // res.send(req.body.title);
    id_param = req.body.id;
    title_param = req.body.title;
    category_param = req.body.category;
    // res.send(category_param);
    images_param = req.body.images;
    brand_param = req.body.brand;
    price_param = req.body.price;
    stars_param = req.body.stars;
    cpu_param = req.body.cpu;
    camera_param = req.body.camera;
    size_param = req.body.size;
    weight_param = req.body.weight;
    display_param = req.body.display;
    battery_param = req.body.battery;
    memory_param = req.body.memory;
    console.log(id_param);
    description_param = req.body.description;
    electronicsTable.create({
        id : id_param,
        title : title_param,
        category : category_param,
        images : images_param,
        brand : brand_param,
        price : price_param,
        stars : stars_param,
        cpu : cpu_param,
        camera : camera_param,
        size : size_param,
        weight : weight_param,
        display : display_param,
        battery : battery_param,
        memory : memory_param,
        description : description_param
    }).then((data)=>{
        let str = "Product inserted succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Error while inserting"; 
        console.log(str);
        res.status(400).send(err);
    });
});

app.put("/updateElectronicsProduct",(req,res)=>{  
   
    id_param = req.body.id;
    // res.send(req.body);
    title_param = req.body.title;
    category_param = req.body.category;
    images_param = req.body.images;
    brand_param = req.body.brand;
    price_param = req.body.price;
    stars_param = req.body.stars;
    cpu_param = req.body.cpu;
    camera_param = req.body.camera;
    size_param = req.body.size;
    weight_param = req.body.weight;
    display_param = req.body.display;
    battery_param = req.body.battery;
    memory_param = req.body.memory;
    description_param = req.body.description;

    electronicsTable.update({
        title : title_param,
        category : category_param,
        images : images_param,
        brand : brand_param,
        price : price_param,
        stars : stars_param,
        cpu : cpu_param,
        camera : camera_param,
        size : size_param,
        weight : weight_param,
        display : display_param,
        battery : battery_param,
        memory : memory_param,
        description : description_param
    },{where:{id:id_param}}).then((data)=>{
        let str = "Record updated succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not there in the table"; 
        console.log(str);
        res.status(404).send(str);
    });
}
);

app.delete("/deleteElectronicsProduct/:id",(req,res)=>{
    param_id = req.params.id;
    electronicsTable.destroy({where:{id:param_id}}).then((data)=>{
        str = "Record Deleted Succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not present in the table";
        console.log(str);
        res.status(404).send(str);
    });
});


app.listen(8001,function(){
   console.log("Listeniong at 8001...."); 
});

// ------------------------------------------
// Cart Table
// ------------------------------------------

let cartTable = sequelize.define(
    'cartSequelize',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    c_id : Sequelize.INTEGER,
    p_id : Sequelize.INTEGER,
    p_tab : Sequelize.STRING,
    p_qty : Sequelize.INTEGER,

    },{
        timestamps : false,
        freezeTableName : true
    }
);

cartTable.sync().then(()=>{
    console.log("Connected with the table cartSequelize");
}).catch((err)=>{
    console.log("Unable to create/connect with the table cartSequelize...");
});


app.post("/insertCartProduct",(req,res)=>{
    console.log("sdsd" + JSON.stringify(req.body));
    // id_param = 0;
    c_id_param = req.body.c_id;
    p_id_param = req.body.p_id;
    p_tab_param = req.body.p_tab;
    p_qty_param = req.body.p_qty;

    let custObj = cartTable.build({
        // id : id_param,
        c_id : c_id_param,
        p_id : p_id_param,
        p_tab : p_tab_param,
        p_qty : p_qty_param
    });
    console.log("custObj = " + p_id_param);
    // res.status(201).send("str");
    custObj.save().then((data)=>{
            let str = "Product added to cart succesfully";
            console.log(str);
            res.status(201).send(str);
    }).catch((err)=>{
        let str = "We were unable to add the product to the cart";
        console.log(str +err); 
        res.status(404).send(str + err);
    });
});

app.put("/updateCartProduct",(req,res)=>{  
   
    c_id_param = req.body.c_id;
    p_id_param = req.body.p_id;
    p_tab_param = req.body.p_tab;
    p_qty_param = req.body.p_qty;


    cartTable.update({
        c_id : c_id_param,
        p_id : p_id_param,
        p_tab : p_tab_param,
        p_qty : p_qty_param
    },{where:{[Sequelize.Op.and]:[{c_id:c_id_param},{p_id:p_id_param},{p_tab:p_tab_param}]}}).then((data)=>{
        let str = "Record updated succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not there in the table"; 
        console.log(str);
        res.status(404).send(str);
    });
}
);


app.get("/CartProductsForUser/:Id",(req,res)=>{
    id = req.params.Id;
    cartTable.findAll({where:{c_id:id}},{raw:true}).then((data)=>{
            console.log("Data is fetched succesfully");
            res.status(200).send(data);
        }
    ).catch((err)=>{
        let strErr = "Unable to fetch the given record"; 
        console.log(strErr);
        res.status(404).send(strErr);
    })
});

app.delete("/deleteCartItem/:c_id/:p_id/:p_tab",(req,res)=>{
    let c_id_param = req.params.c_id;
    let p_id_param = req.params.p_id;
    let p_tab_param = req.params.p_tab;
    console.log(req.params.p_id);
    cartTable.destroy({where:{[Sequelize.Op.and]:[{c_id:c_id_param},{p_id:p_id_param},{p_tab:p_tab_param}]}}).then((data)=>{
        let str = "Record deleted succesfully"
        console.log(str);
        res.status(201).send(str)
    }).catch(
       (err)=>{
           let str = "Error in deleting the recrds"
           console.log(str + err);
           res.status(404).send(str + err)
       } 
    );
});

// ------------------------------------------
// Profile Table
// ------------------------------------------
let profileTable = sequelize.define('profileSequelize',{
    id : {
        primaryKey : true,
        type : Sequelize.INTEGER
    },
    name : Sequelize.STRING,
    age : Sequelize.INTEGER,
    email : Sequelize.STRING,
    address :Sequelize.STRING,
    phone : Sequelize.STRING,

    },{
        timestamps : false,
        freezeTableName : true
    }
);
profileTable.sync().then(()=>{
    console.log("Connected with the table profileSequelize");
}).catch((err)=>{
    console.log("Unable to create/connect with the table profileSequelize...");
    console.log(err);
});

app.get("/profileDetails/:Id",(req,res)=>{
    id_param = req.params.Id;
    // cartTable.findAll({where:{id:id_param}},{raw:true}).then((data)=>{
    //         console.log("Data is fetched succesfully");
    //         res.status(200).send(data);
    //     }
    // ).catch((err)=>{
    //     let strErr = "Unable to fetch the given record"; 
    //     console.log(strErr);
    //     res.status(404).send(strErr);
    // })
    profileTable.findByPk(id_param,{raw:true}).then((data)=>{
        // if(data.dataValues.pwd == pwd_param)
            res.status(200).send(data);
    }).catch(()=>{
        res.status(404).send("customer not registered");
    });
});



app.post("/insertProfile",(req,res)=>{
    id_param = req.body.id;
    name_param = req.body.name;
    age_param = req.body.age;
    email_param = req.body.email;
    address_param = req.body.address;
    phone_param = req.body.phone;

    let profileObj = profileTable.build({
        id : id_param,
        name : name_param,
        age : age_param,
        email : email_param,
        address : address_param,
        phone : phone_param
    });
    profileObj.save().then((data)=>{
            let str = "Profile added";
            console.log(str);
            res.status(201).send(str);
    }).catch((err)=>{
        let str = "We were unable to add the profile";
        console.log(str +err); 
        res.status(404).send(str + err);
    });
});

app.put("/updateProfile",(req,res)=>{  
   
    id_param = req.body.id;
    name_param = req.body.name;
    age_param = req.body.age;
    email_param = req.body.email;
    address_param = req.body.address;
    phone_param = req.body.phone;

    profileTable.update({
        name : name_param,
        age : age_param,
        email : email_param,
        address : address_param,
        phone : phone_param
    },{where:{id:id_param}}).then((data)=>{
        let str = "Record updated succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not there in the table"; 
        console.log(str);
        res.status(404).send(str);
    });
}
);

// ------------------------------------------
// Order Table
// ------------------------------------------

let orderTable = sequelize.define('orderSequelize',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        c_id : Sequelize.INTEGER,
        p_id : Sequelize.INTEGER,
        p_tab : Sequelize.STRING,
        p_qty :Sequelize.INTEGER,
        status : Sequelize.STRING,
    },{
        timestamps : false,
        freezeTableName : true
    }
);
orderTable.sync().then(()=>{
    console.log("Connected with the table orderSequelize");
}).catch((err)=>{
    console.log("Unable to create/connect with the table orderSequelize...");
    console.log(err);
});

app.get("/getAllCustomerOrders/:Id",(req,res)=>{
    id = req.params.Id;
    orderTable.findAll({where:{c_id:id}},{raw:true}).then((data)=>{
            console.log("Data is fetched succesfully");
            res.status(200).send(data);
        }
    ).catch((err)=>{
        let strErr = "Unable to fetch the given record"; 
        console.log(strErr);
        res.status(404).send(strErr);
    })
});

app.get("/getAllOrders",(req,res)=>{
    orderTable.findAll({raw:true}).then((data)=>{
            console.log("Data is fetched succesfully");
            res.status(200).send(data);
        }
    ).catch((err)=>{
        let strErr = "Unable to fetch the given record"; 
        console.log(strErr);
        res.status(404).send(strErr);
    })
});


app.post("/insertOrder",(req,res)=>{
    console.log("sdsd" + JSON.stringify(req.body));
    // id_param = 0;
    c_id_param = req.body.c_id;
    p_id_param = req.body.p_id;
    p_tab_param = req.body.p_tab;
    p_qty_param = req.body.p_qty;
    status_param = req.body.status;

    let orderObj = orderTable.build({
        // id : id_param,
        c_id : c_id_param,
        p_id : p_id_param,
        p_tab : p_tab_param,
        p_qty : p_qty_param,
        status : status_param
        
    });
    console.log("orderObj = " + p_id_param);
    // res.status(201).send("str");
    orderObj.save().then((data)=>{
            let str = "Order succesfully placed";
            console.log(str);
            res.status(201).send(str);
    }).catch((err)=>{
        let str = "We were unable to place the order";
        console.log(str +err); 
        res.status(404).send(str + err);
    });
});

app.put("/updateOrderStatus",(req,res)=>{  
    
    id_param = req.body.id;
    status_param = req.body.status;

    orderTable.update({
        status : status_param
    },{where:{id:id_param}}).then((data)=>{
        let str = "Record updated succesfully";
        console.log(str);
        res.status(200).send(str);
    }).catch((err)=>{
        let str = "Record not there in the table"; 
        console.log(str);
        res.status(404).send(str);
    });
});


