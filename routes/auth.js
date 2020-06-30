var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/register', function (req, res, next) {
    console.log("register request received");
});

module.exports = router;