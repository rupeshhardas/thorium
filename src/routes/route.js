const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController1= require("../controllers/bookController1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createbook1", BookController1.createBook1)

router.get("/booklist", BookController1.bookList)

router.get("/getbooksyear", BookController1.getBookslnyear)

route.get("/getparticularbook", BookController1.getParticularbook)

router.get("/getinrbooks", BookController1.getINRBooks)

router.get("/getrandombook", BookController1.getRandombooks)

    

module.exports = router;
