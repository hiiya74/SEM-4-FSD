var express= require('express');
var app=express();
app.use(express.static(__dirname,{index:"calc.html"}));
app.get("/calc",(req,res)=>{
    res.set("Content-Type","text/html");
    var n1= parseInt(req.query.n1);
    var n2= parseInt(req.query.n2);
        if((n1>0)&&(n2>0))
        {
            if(req.query.formula=="add")
            {
                res.write("<h1>adition is "+(n1+n2)+"</h1>");
            }
            else if(req.query.formula=="sub")
            {
                res.write("<h1>subtraction is "+(n1-n2)+"</h1>");
            }
            else if(req.query.formula=="mul")
            {
                res.write("<h1>multiplication is "+(n1*n2)+"</h1>");
            }
            else if(req.query.formula=="div")
            {
                res.write("<h1>division is "+(n1/n2)+"</h1>");
            }
            else{
                res.write("select formula")
            }
            res.send()
        }
        else{
            res.write("<h1>please enter valid numbers</h1>");
        }
        res.send()
    })
    app.listen(3457);
