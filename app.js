const express = require('express');
const mongoose = require('mongoose');
const bd = require('body-parser');
const router = require('./Routes/auth.routes');
const brcypt = require('bcrypt');
const morgan = require('morgan');
const dotenv = require('dotenv');


const app = express();

dotenv.config();

//middlewares
app.use(express.json());
app.use(bd.urlencoded({
    extended: true
}));
app.use(morgan('dev'));
app.use('/api' , router);

//Database DB variable
const { db } = require('./Config')

app.get('/' , (req,res)=>{
    res.send("Hello Innitial baby app");
})
app.get('/home' , (req,res)=>{
    res.send("Home");
})

app.listen('5001' , () => console.log("server connected on port 5001") )