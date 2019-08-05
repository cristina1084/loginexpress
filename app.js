var exp = require('express');
var bodyparser = require('body-parser');
const app = exp();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/src/views/login.html")
})

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/src/views/home.html")
    console.log(req.body.name);
    
})

app.listen(8080,()=>{
    console.log("Listening");
})