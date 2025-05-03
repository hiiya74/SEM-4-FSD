var express= require('express');
var app= express();
var cp= require('cookie-parser');
app.use(cp());
app.use(express.static(__dirname,{index:"h4.html"}));
app.use(express.urlencoded());
app.post("/next",(req,res)=>{
    res.cookie("fname"+req.body.fname);
    res.cookie("lname"+req.body.lname);
    res.cookie("password"+req.body.pswd);
    res.redirect("/admin");
});
app.get("/admin",(req,res)=>{
    res.clearCookie("lname");
    res.write("welcome "+req.cookies.fname+"<br>");
    res.write("your password is "+req.cookies.pswd+"<br>");
    res.send();
});
app.listen(4432);
