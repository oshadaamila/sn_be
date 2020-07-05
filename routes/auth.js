var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/register', function (req, res) {
    console.log("register request received");
    res.send("Register Request Received");
});

module.exports = router;