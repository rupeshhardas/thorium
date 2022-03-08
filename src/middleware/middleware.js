
const middleware = function(req, res, next){
  
    let contentTypeHeader = req.headers["isfreeappuser"]
    console.log(contentTypeHeader)

    if(contentTypeHeader){
        req.body.isFreeAppUser = contentTypeHeader
        next()
    }else{
        res.send({msg : " INvalid header Value"})
    }
}



module.exports.middleware=middleware