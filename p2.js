var express= require('express');
var app=express();
app.use(express.static(__dirname,{index:"p1_p2.html"}));
app.use(express.urlencoded());
app.post("/process",(req,res)=>{
    if(req.body.fname=="admin")
    {
        res.write("WELCOME ADMIN")
    }
    else{
        res.write("please enter as admin")
    }
})
app.listen(3764)