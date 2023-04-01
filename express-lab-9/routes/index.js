var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// signup
router.post(
  '/signup', 
  body('first_name', "first_name cannot be empty").notEmpty(),
  body('last_name', "last_name cannot be empty").notEmpty(),
  body('username', "username cannot be empty").notEmpty(),
  body("username", "Must be an email").isEmail(),
  body('password', "password cannot be empty").notEmpty(),
  body('password', "Not Strong Enough").isStrongPassword(),
  body("password", "At least 5 characters").isLength({ min: 5 }),
  body("password", "At most 10 characters").isLength({ max: 11 }),
  function(req,res,next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    } else {
      return res.json({status:'Success'})
    }
  }
)

module.exports = router;
