let axios = require("axios");
const res = require("express/lib/response");
const { options } = require("../routes/route");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistric = async function (req, res) {
    try {


        let id = req.query.district_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }

    catch (err) {
        console.log(err)
        res.status(400).send({ msg: err.message })

    }

}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWhether = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArr = []

        for (let i = 0; i < cities.length; i++) {

            obj = { city: cities[i] }

            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8cbea6b74fe8dfc81f64b53bc6dd1f4c`)


            obj.temp = options.data.main.temp
            cityArr.push(obj)
        }
        let sorted = cityArr.sort(function (a, b) { return a.temp - b.temp })

        res.status(200).send({ msg: sorted })
    }
    catch (err) {
        res.status(400).send({ msg: err.message })
    }
}


let getMeme = async function (req, res) {
    try {

        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)

        res.send({ msg: result.data })
    }
    catch (err) {
        res.status(400).send({ msg: err.message })
    }
}

let createMeme = async function (req, res) {
    try {
        let id = req.query.template_id
        let text = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text}&text1=${text1}&username=${username}&password=${password}`
        }

        let result = await axios(options)

        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(400).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistric = getByDistric
module.exports.getWhether = getWhether
module.exports.getMeme = getMeme
module.exports.createMeme = createMeme