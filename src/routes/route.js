const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

let player=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ],
        "bookings": [
        ]
     },
     {
        "name": "Rupesh",
        "dob": "21/1/1998",
        "gender": "male",
        "city": "Nagpur",
        "sports": [
        "Cricket"
        ],
        "bookings": [
        ]
     },                                                                                                                                                                                                                                                                                                         
     {
        "name": "suraj",
        "dob": "1/10/1996",
        "gender": "male",
        "city": "delhi",
        "sports": [
        "hockey"
        ],
        "bookings": [
        ]
     },                                                                                                                                                                                                                                                                                                       
     {
        "name": "ashish",
        "dob": "11/1/1997",
        "gender": "male",
        "city": "mumbai",
        "sports": [
        "football"
        ],
        "bookings": [
        ]
     },
     {
        "name": "sapna",
        "dob": "1/5/1998",
        "gender": "female",
        "city": "gujarat",
        "sports": [
        "swimming"
        ],
        "bookings": [
        ]
     },                                                                                                                                                                                                                                                                                                       
     {
        "name": "swati",
        "dob": "11/10/1996",
        "gender": "female",
        "city": "akola",
        "sports": [
        "kho-kho"
        ],
        "bookings": [
        ]
     },
     {
        "name": "Akash",
        "dob": "10/1/1992",
        "gender": "male",
        "city": "amravati",
        "sports": [
        "kabbadi"
        ],
        "bookings": [
        ]
     },   
     {
        "name": "rohan",
        "dob": "1/1/1993",
        "gender": "male",
        "city": "jaipur",
        "sports": [
        "basketball"
        ],
        "bookings": [
        ]
     },   
]

router.post('/player',function(req, res) {
    let element=req.body
    let ele=0
    // player.push(element)
    // res.send(player)
    
    for(let i=0;i<player.length;i++){
        let ele2=player[i].name
        if(player[i]["name"] === element["name"]){
            res.send("player alredy exist")
            ele++
            
    }  
}
if(ele==0)
player.push(element)
res.send(player)
})



module.exports = router;