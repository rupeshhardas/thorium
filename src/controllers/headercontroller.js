const userModel=require("../models/userModel")
const productmodel=require("../models/productmodel")
const ordermodel=require("../models/ordermodel")

const createProduct= async function(req, res) {
    let data=req.body
    let productdata= await productmodel.create(data)
    res.send( {product:productdata})
}

const createNewUser= async function(req, res) {
    let userdata=await userModel.create(req.body)
    res.send({user: userdata})
}


const createOrder= async function(req,res){
    let order=req.body
    let userid=order.userId
    let productid=order.productId


    if(!userid) return res.send("user id not present")

    let user= await userModel.findById(userid)

    if(!user) return res.send("the user id is not valid")

    if(!productid) return res.send("product id is not present")

    let productnew = await productmodel.findById(productid)

    if(!productnew) return res.send("the user id is not valid")

    






    let orderdata= await ordermodel.create(order)
    res.send({order: orderdata
    })
}


module.exports.createNewUser=createNewUser
module.exports.createProduct=createProduct
module.exports.createOrder=createOrder





