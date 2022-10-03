var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const home = require('./routes/user');
app.use('/',home)

const notebook = require('./routes/assets/notebooks')
app.use('/assets',notebook)

app.listen(port = 300,() => {console.log(`${port}`)})

