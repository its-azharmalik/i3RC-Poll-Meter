const express = require('express');
const mongoose = require('mongoose');
const bd = require('body-parser');

const app = express();

app.get('/' , (req,res)=>{
    res.send("Hello Innitial baby app");
})

app.listen('3000' , () => console.log("server connected on port 3000") )