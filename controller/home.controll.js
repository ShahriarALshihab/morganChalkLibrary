const path=require('path'); 

const homeRoute=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/home.html')); 
}

const getProduct=(req,res)=>{
    res.json({
        message:'Get product'
    })
}

const postProduct=(req,res)=>{
    res.send('This is a post request'); 
}

module.exports={getProduct,postProduct,homeRoute}