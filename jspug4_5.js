var express=require('express');
var app=express();
app.use(express.urlencoded({extended: false}));
app.get("/",(req,res)=>{
    res.render(__dirname+"/pug4.pug");
});
app.post("/data",(req,res)=>{
    res.render(__dirname+"/pug5.pug",{n:req.body.n,e:req.body.e,c:req.body.c});
}
);
app.listen(3497);