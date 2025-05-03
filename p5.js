var express= require('express');
var app= express();
var cp= require('cookie-parser');
app.use(cp());
app.use(express.static(__dirname,{index:"h5.html"}));
app.use(express.urlencoded());
app.post("/feedback",(req,res)=>{
    const {n,e,m,r}=req.body;
    const feedback = {n,e,m,r};
    res.cookie("feedback",feedback,{maxAge: 10000});
    res.send("<a href='/feedback'>Click here to see your feedback</a>");
});
app.get("/feedback",(req,res)=>{
    const feedback = req.cookies.feedback;
    res.write(`<h1>${feedback.n}</h1>`);
    res.write(`<h1>${feedback.e}</h1>`);
    res.write(`<h1>${feedback.m}</h1>`);
    res.write(`<h1>${feedback.r}</h1>`);
    res.write("<a href='/'>logout</a>");
    res.send();
});
app.listen(3443);