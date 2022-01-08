const isDataCollecter = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'Data Collector'){
        // req.user = user ;
        next();
    }else{  res.redirect('/') };
}

const isDataCollecterOR = async (req,res,next) =>{
    const user = req.user;
    // console.log(req.body.password , user[0].password);
    if(req.user.authType === 'BLO' || req.user.authType === 'Poll Admin Client' || req.user.authType === 'System Admin'){
        // req.user = user ;
        next();
    }else{  res.redirect('/') };
}

module.exports = {isDataCollecter , isDataCollecterOR} ;