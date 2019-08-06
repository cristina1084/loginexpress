var exp = require('express');
var bodyparser = require('body-parser');
const app = exp();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/src/views/login.html")
})

app.post("/home",(req,res)=>{
    console.log(req.body.uname, req.body.pwd);
    if(req.body.uname=="admin" && req.body.pwd=="Pass@123")
        res.sendFile(__dirname+"/src/views/home.html")
    else 
        res.sendFile(__dirname+"/src/views/login.html")
    
})

app.listen(8080,()=>{
    console.log("Listening");
})