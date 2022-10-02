var express = require('express');
var app = express();


const home = require('./routes/user');
app.use('/',home)

app.listen(port = 300,() => {console.log(`${port}`)})

