const isPollAdminClient = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'Poll Admin Client'){
        // req.user = user ;
        next();
    }else{  res.redirect('/') };
}

module.exports = isPollAdminClient ;