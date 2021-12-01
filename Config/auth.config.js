const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const isAuthenticated = async (req,res,next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null){
        return res.status(403).send("Please provide auth headers properly");
    }

    jwt.verify(token , process.env.ACCESS_TOKEN , (err , user) =>{
        if(err) res.status(404);
        req.user = user ;
        next();
    });
}

module.exports = isAuthenticated ;