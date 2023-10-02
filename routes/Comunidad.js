var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('views/Comunidad', function (req, res, next) {
    res.send('views/Comunidad' );
});

module.exports = router;