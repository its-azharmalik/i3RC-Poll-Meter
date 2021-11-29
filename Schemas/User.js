const mongoose = require('mongoose');
const {authType} = require('../Utils')

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
    }, 
    email : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    authType : {
        type : String,
        enum : authType ,
        required : true
    }
})

const User = mongoose.Model("User" ,userSchema);

module.exports = User;