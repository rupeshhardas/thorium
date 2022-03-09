
const jwt = require("jsonwebtoken");

const middleware = function(req, res, next){
  
    let token = req.headers["x-auth-token"]

    console.log(token)

    if(!token){
       return res.send({msg : " INvalid header Value"})
    }

    let decodedToken = jwt.verify(token, "functionup-cohort");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    
  let userid= req.params.userId

  let tokenid=decodedToken.userId

  console.log(userid,tokenid)

  if(userid == tokenid){
    next()
  }else{
    return res.send("you are not allowed to modify others data")
  }

}



module.exports.middleware=middleware
// module.exports.middleware2=middleware2
