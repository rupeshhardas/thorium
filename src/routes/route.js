const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/movies", function(req,res) {
    let movies=["fukery", "judwa", "commando", "bahubali", "titanic"]
    console.log(movies)
    res.send(movies)
})




module.exports = router;
