var exp = require('express');
var bodyparser = require('body-parser');
const app = exp();

app.set("view engine","ejs");  //setting view to ejs -- can be set to other templates also
app.set("views","./src/views");  //specify folder where ejs pages are saved

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    // res.sendFile(__dirname+"/src/views/login.html")
    res.render("login");
})

app.post("/home",(req,res)=>{
    console.log(req.body.uname, req.body.pwd);
   /*  if(req.body.uname=="admin" && req.body.pwd=="Pass@123")
        res.sendFile(__dirname+"/src/views/home.html") */
    if(req.body.pwd=="Pass@123")
        // res.sendFile(__dirname+"/src/views/home.html")
        res.render("home",{user:req.body.uname}); //pass parameters as json
    else 
        res.redirect("/"); //redirect to login page
})

app.listen(8080,()=>{
    console.log("Listening");
})