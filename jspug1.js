var express = require('express');
var app = express();
// app.set('view engine', 'pug');
app.get("/",(req,res)=>{
    res.render(__dirname+"/pug1.pug");
});
app.listen(3655);