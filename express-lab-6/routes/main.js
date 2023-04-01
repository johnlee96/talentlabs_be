var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET other page. */
router.get('/other', function(req, res, next) {
  res.render('other');
});

/* GET hello name page. */
router.get('/hello/:name', function(req, res, next) {
  res.render('atleast1', { name: req.params["name"] });
});

module.exports = router;
