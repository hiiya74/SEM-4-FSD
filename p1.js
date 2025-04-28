var express= require('express');
var app=express();
app.use(express.static(__dirname,{index:"p1_p2.html"}));
app.use(express.urlencoded());
app.post("/process",(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    res.write(fname);
    res.send()
})
app.listen(3754)
