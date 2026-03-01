const jwt = require("jsonwebtoken")

async function identifyUser(req,res,next) {
    const token = req.cookis.token
    if(!token){
      return res.status(401).json({
        message:"UnAuthorized Access"
      })
    }
    let decoded 
    try{

      decoded = jwt.verrify(token,process.env.JWT_SECRET)
      
    }catch(err){
      return res.status(401).json({
        message:"Invalid token"
      })
    }
    req.user = decoded

    next()
}

module.exports = identifyUser