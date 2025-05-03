var express = require('express');
var app = express();
app.use(express.static(__dirname, { index: "login_form.html" }));
app.use(express.urlencoded({extended: false}));
app.post('/login', (req, res, next)=>{
    res.set("Content-Type", "text/html");
    res.write("welcome " + req.body.name + "<br>");
    res.write("email id is " + req.body.email + "<br>");
next();
})
app.post('/login', (req, res)=>{
    if(req.body.subscribe == "on"){
        res.write('<h4 style="color:blue;">thank you for subscribing😄</h4> <a href="/">logout</a>');
    }
    else{
        res.write('<h4 style="color:blue;" >thank you for login!☺️  please subscribe</h4> <a href="/sub">subscibe</a>');
    }
    res.send();
})

app.get('/sub', (req, res)=>{
    res.set("Content-Type", "text/html");
    res.write('<h4 style="color:blue;">thank you for subscribing😄</h4> <a href="/">logout</a>');
    res.send();
})
app.listen(3657);