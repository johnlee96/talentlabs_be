var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'JH first project' });
});

/* GET users listing. */
router.get('/users', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
