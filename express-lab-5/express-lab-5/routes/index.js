var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET demo5 */
router.get('/demo5/:title', function(req, res, next) {
  res.render('index', { title: req.params.title });
});
/* GET add */
router.get('/add/:num1/:num2', function(req, res, next) {
  
  const num1 = parseFloat(req.params.num1)
  const num2 = parseFloat(req.params.num2)
  const sum = num1 + num2
  
  res.render('add', { 
    num1: num1, 
    num2: num2, 
    sum : sum
  });
});
/* GET triangle-area */
router.get('/triangle-area/:num1/:num2', function(req, res, next) {
  
  const num1 = parseFloat(req.params.num1)
  const num2 = parseFloat(req.params.num2)
  const mult = num1 * num2 / 2
  
  res.render('triangle', { 
    num1: num1, 
    num2: num2,
    mult: mult
  });
});

module.exports = router;
