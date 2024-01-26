const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const port = 3000;
app.get('/',(req,res)=>{
    res.send("hw")

});

app.get('/add/:n/:m',(req,res)=>{
    res.json(Number(req.params.n)+Number(req.params.m))

});

app.listen(port);