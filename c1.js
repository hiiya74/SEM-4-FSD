var express= require('express');
var app= express();
var cp= require('cookie-parser');
app.use(cp());
app.get('/',(req,res)=>{
    res.cookie('name','express');
    res.cookie('fname','himani');
    res.cookie('lname','chudasama');
    res.cookie('ID','2',{expires:new Date(Date.now()+10000)});//experier after 10 sec
    res.cookie("email","hiya@gmail.com",{maxAge:2000});//till 2 sec
    res.clearCookie("lname");
    const cookies=req.cookies;
    res.send(cookies);
});
app.listen(4433);