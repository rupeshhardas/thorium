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

router.get("/movies/:movieId", function(req, res) {
    let movies=["fukery", "judwa", "commando", "bahubali", "titanic"]
    let value=req.params.movieId
    if(value>movies.length-1){
        res.send('"movies doesent exit"')
    } else{
    res.send(movies[value])
    }
});
router.get("/films/:id" ,function(req, res) {
    let films=[{"id":1,"name":"The shining"},{"id":2,"name":"Incendies"},{"id":3,"name":"rang de basanti"},{"id":4,"name":"Finding Demo"}]
    let value=req.params.id
    res.send(films[value-1])
    





module.exports = router;
