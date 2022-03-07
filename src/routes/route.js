const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")

// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createauthor",   authorController.createAuthor)

router.post("/createpublisher", authorController.createPublisher)

router.post("/createbook", authorController.createBook)

router.get("/getallbooks", authorController.getBooks)

router.put("/updatebook",authorController.updatebook)



module.exports = router;