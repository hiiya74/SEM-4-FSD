var express=require('express');
var app=express();
app.get("/",(req,res)=>{
    res.render(__dirname+"/pug3.pug",{message:'Hello !',name:'hiya',id:2});
}
);
app.listen(3655);
