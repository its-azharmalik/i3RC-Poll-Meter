const bcrypt = require('bcrypt');
const { User } = require('../Schemas')

const isAuthenticated = async (req,res,next) =>{
    try {
        const user = await User.find({ email : req.body.email });
        if(user.length === 0){
            res.json({
                note : "Email ID and Password DID NOT MATCH ",
            })
        }
        else{
            if(await bcrypt.compare(req.body.password , user[0].password)){
                req.user = user ;
                next();
            }else{  res.redirect('/') };
        }
    // console.log(req.body.password , user[0].password);
    } catch (error) {
        res.json({
            note : "Email ID and Password DID NOT MATCH",
        }).redirect('/')
    }
    
}

module.exports = isAuthenticated ;