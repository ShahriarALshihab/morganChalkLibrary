const express=require('express'); 
const morgan=require('morgan'); 

const app=express(); 
const router=require('./route/home.route'); 

app.use(morgan('dev')); 

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/',router); 


app.use((req,res,next)=>{
    res.status(404).json({
        message:'404 Not Found'
    }) 
}); 

app.use((req,res)=>{
    res.status(500).json({
        message:'Server Error'
    })
}); 

module.exports=app; 