const isBLO = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'BLO'){
        // req.user = user ;
        next();
    }else{  res.redirect('/') };
}

const isBLO_OR = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'BLO'){
        // req.user = user ;
        next();
    };
}

module.exports = {isBLO , isBLO_OR} ;