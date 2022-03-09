
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
}



module.exports.middleware=middleware