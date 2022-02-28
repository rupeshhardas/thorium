


const UserModel=require("../models/userModel.js")

const CreateBook= async function(req, res) {
    let data = req.body
    let BooksData= await userModel.create(data)
    res.send({Books: BooksData}) 
}

const getBookData = async function (req, res) {
    let allbooks = await userModel.find()
    res.send({Books: allbooks})
}

module.exports.CreateBook= CreateBook
module.exports.getBookData= getBookData
