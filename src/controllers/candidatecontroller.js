const jwt = require("jsonwebtoken");
const candidatemodel = require("../models/candidatemodel");

const createcandidate = async function (req, res){
    let data=req.body
    let showdata= await candidatemodel.create(data)
    res.send({candidate: showdata})
}

const logincandidate = async function(req, res){
    let candidateid=req.body.userId
    let password=req.body.password

    let candidate = await candidatemodel.findOne({email:candidateid, password:password})
    if(!candidate)
    
    return res.send({
        status: false,
        msg: "username or the password is not correct"
    })

let token = jwt.sign({userId: candidate._id.toString()} ,"functionup-cohort")
res.setHeader("x-auth-token", token)
res.send({status:true, data:token})

}

let getcandidatedata= async function(req, res){




    let candidetail = req.param.userId
    let candidetails=await candidatemodel.findById( candidetail)
    if(!candidetails){
        return res.send("candidate not exit")
    }

    res.send({data:candidetails})

}


    let updatecandidate = async function(req,res){

        let data = req.param.userId
        let candidatedetail=await candidatemodel.findById(data)
        if(!candidatedetail){
            return res.send("no candidate found")
        }

        let candidatedata=req.body
        let showdata= await candidatemodel.findAndUpdate({_id:emailId},{$set:candidatedata},{new:true})
        res.send({candidate:showdata})


    }

    const deleteUser = async function (req, res) {
        let userId = req.params.userId;
        let ChangeUserProperty = await userModel.findOneAndUpdate( { _id : userId },{$set : {isDeleted : true }})
        let deleteUser = await userModel.findByIdAndDelete(userId)
        res.send({msg :"user deleted Succesfully" ,deleteUser })
      
      }








module.exports.createcandidate=createcandidate
module.exports.logincandidate=logincandidate
module.exports.getcandidatedata=getcandidatedata
module.exports.updatecandidate= updatecandidate
module.exports.deleteUser=deleteUser