const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const mongoose = require("mongoose");

const URL='mongodb+srv://m001-student:m001-mongodb-basics@sandbox.xwpvdy5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log('MongoDB Connected successfully');
}).catch(error=>{
    console.log(error.message)
});

const app = express();
const port = 8080;

require('./app/routes')(app, {});

app.listen(port, () => {  console.log('We are live on ' + port);});