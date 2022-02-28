const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData


const UserModel=require('../models/userModel')

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
