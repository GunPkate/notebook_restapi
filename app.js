var express = require('express');
var app = express();
var x = 'Hello world'

app.get('/',(req,res)=>{
    res.send(x);
    console.log(x);
})

app.listen(port = 300,() => {console.log(`${port}`)})