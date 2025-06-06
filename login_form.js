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
    if(req.body.checkbox == "on"){
        res.write('thank you for subscribing <a href="/">logout</a>');
    }
    else{
        res.write('thank you for login you can also subscribe <a href="/">logout</a>');
    }
    res.send();
})

app.get('subscribe', (req, res)=>{
    res.set("Content-Type", "text/html");
    res.write('<h3>thank you for subscribing</h3> <a href="/">logout</a>');
    res.send();
})
app.listen(3676)