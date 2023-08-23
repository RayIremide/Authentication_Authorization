const ValidateUserCreation = (req,res,next)=>{
    if(!req.body.username){
        return res.status(400).json({
            error:"username is required"
        })
    }

    if(!req.body.password){
        return res.status(400).json({
            error:"password is required"
        })
    }

    next()

}

module.exports={
    ValidateUserCreation
}