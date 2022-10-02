var {Router} = require('express')
var express = require('express')
const router = express.Router();

var b = 'Hello'

router.get('/home',(req,res)=>{
    res.send(b);
    console.log();
})

module.exports = router;

