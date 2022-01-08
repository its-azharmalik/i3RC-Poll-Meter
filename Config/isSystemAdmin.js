const isSystemAdmin = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'System Admin'){
        // req.user = user ;
        next();
    }else{  res.redirect('/') };
}

const isSystemAdminOR = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'System Admin'){
        // req.user = user ;
        next();
    };
}


module.exports = {isSystemAdmin, isSystemAdminOR} ;