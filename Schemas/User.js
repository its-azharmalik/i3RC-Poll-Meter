const mongoose = require('mongoose');
const {authType} = require('../Utils')

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
        unique : true 
    }, 
    email : {
        type : String ,
        required : true ,
        unique : true 
    },
    password : {
        type : String ,
        required : true
    },
    authType : {
        type : String,
        enum : authType ,
        required : true
    },
    party : {
        type : String,
    },
    constituency_access : [{
        type : String ,
    }],
})

const User = mongoose.model("User" ,userSchema);

module.exports = User;