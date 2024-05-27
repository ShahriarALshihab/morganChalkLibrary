const express=require('express'); 
const { homeRoute, getProduct, postProduct } = require('../controller/home.controll');


const route=express.Router(); 

route.get('/',homeRoute); 
route.get('/product',getProduct); 

route.post('/product',postProduct); 

module.exports=route; 