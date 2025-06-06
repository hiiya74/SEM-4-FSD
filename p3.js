var express = require('express');
var app = express();
app.use("/xyz",function(req,res,next){
    console.log(new Date());
    next();
},function(req,res){
    res.set("Content-Type","text/html");
    res.write("<h2>hello</h2><h3>WELCOME TO LJU</h3><h3>tutorial on middleware</h3>");
    res.send();
})
app.listen(3765)