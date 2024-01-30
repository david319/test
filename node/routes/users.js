var express = require('express');
const axios = require("axios");
const router = express.Router();
require('dotenv').config();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/weather', function (req, res, next) {
    try {
        axios.get("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid="
            + process.env.WHEATHER_API)
            .then(response => {
                res.send(response.data);
            })
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
