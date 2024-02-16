const express = require('express');

const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send("Arithmetic Service - last updatred 2.15")

});

app.get('/add/:n/:m', (req, res) => {
    let n = Numer(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
    res.json(sum);
});

app.listen(port);