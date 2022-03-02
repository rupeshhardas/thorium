const AuthorModel= require("../models/authorModel")
const publishermodel= require("../models/publishermodel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createPublisher= async function(req, res) {
    let publishdata = await publishermodel.create(req.body)
    res.send({data: publishdata})
}


module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
