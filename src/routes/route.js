const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const candidatecontroller=require("../controllers/candidatecontroller")
const middleware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.post("/createcandidate", candidatecontroller.createcandidate)

router.post("/logincandidate", candidatecontroller.logincandidate)

router.get("/users/:userId",middleware.middleware, candidatecontroller.getcandidatedata)

router.put("/users/:userId",middleware.middleware, candidatecontroller.updatecandidate)

router.delete("/user/:userId",middleware.middleware,candidatecontroller.deleteUser);




module.exports = router;