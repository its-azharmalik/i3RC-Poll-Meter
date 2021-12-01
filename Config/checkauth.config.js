const bcrypt = require('bcrypt');
const { User } = require('../Schemas')

const isAuthenticated = async (req,res,next) =>{
    const user = await User.find({ email : req.body.email });
    // console.log(req.body.password , user[0].password);
    if(await bcrypt.compare(req.body.password , user[0].password)){
        req.user = user ;
        next();
    }else{  res.redirect('/') };
}

module.exports = isAuthenticated ;