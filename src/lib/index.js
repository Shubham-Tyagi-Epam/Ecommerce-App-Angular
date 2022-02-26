// var express = require('express');
// var Sequelize = require('sequelize');
// var db = require('./db.config');
// var app = express();
// var cors = require('cors');
// app.use(cors());

// const sequelize = new Sequelize(db.DB,db.USER,db.PASSWORD,{
//     host:db.HOST,
//     dialect  : db.dialect,
//     pool:{
//         max : db.pool.max,
//         min : db.pool.min,
//         acquire : db.pool.acquire,
//         idle : db.pool.idle
//     } 
//  });

//  let fashionTable = sequelize.define('fashionSequelize',{
//     id : {
//         primaryKey : true,
//         type : Sequelize.INTEGER
//     },
//     title : Sequelize.STRING,
//     category : Sequelize.STRING,
//     images : Sequelize.
//     brand : Sequelize.STRING,
//     price : Sequelize.FLOAT,
//     starts : Sequelize.INTEGER
//     },{
//         timestamps : false,
//         freezeTableName : true
//     }
// );