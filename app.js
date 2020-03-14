const express = require('express');
const bodyParser = require('body-parser');
const feedRoute = require('./routes/feed');


const app = express();

app.use(bodyParser.json()); //application/json

app.use((req, res, next) => { // for avoiding cros resource origin sharing error
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next();
})

app.use('/feed', feedRoute);


app.listen(8080);