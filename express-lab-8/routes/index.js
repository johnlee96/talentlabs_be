var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST customers */
router.post('/customers', function(req, res, next) {
  res.status(201).json({
    message: 'New customer created.'
  });
});

/* GET customers */
router.get('/customers', function(req, res, next) {
  res.json({
    message: 'All customers retrieved.'
  });
});

/* PUT customers */
router.put('/customers', function(req, res, next) {
  res.json({
    message: 'All customers updated.'
  });
});

/* DELETE customers */
router.delete('/customers', function(req, res, next) {
  res.json({
    message: 'All customers deleted.'
  });
});

/* POST customers/:id */
router.post('/customers/:id', function(req, res, next) {
  res.status(201).json({
    message: 'A new customer created: ' + req.params.id
  });
});

/* GET customers/:id */
router.get('/customers/:id', function(req, res, next) {
  res.json({
    message: 'A customer retrieved: ' + req.params.id
  });
});

/* PUT customers/:id */
router.put('/customers/:id', function(req, res, next) {
  res.json({
    message: 'A customer updated: ' + req.params.id
  });
});

/* DELETE customers/:id */
router.delete('/customers/:id', function(req, res, next) {
  res.json({
    message: 'A customer deleted: ' + req.params.id
  });
});

module.exports = router;
