var exp = require('express');
var bodyparser = require('body-parser');
const app = exp();
var book_arr = [{name:"Book1", auth:"Author1", price:890},{name:"Book2", auth:"Author2", price:90}, {name:"Book3", auth:"Author3", price:230}];
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

app.get("/books",(req,res)=>{
    res.render("books",{books:book_arr});
})

app.listen(8080,()=>{
    console.log("Listening");
})