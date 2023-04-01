var express = require('express');
var router = express.Router();
var connection = require('../database.js')
// body validation
const { body, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* List manufacturer :id */
router.get('/manufacturers/:id', 
  function(req, res, next) {
      connection
        .raw(`select * from manufacturer where id = ?`,req.params.id)
        .then(function (result) {
          // send back the query result as json
          res.status(200).json({
            "manufacturers": result[0],
          });
        })
        .catch(function (error) {
          // log the error
          console.log(error);
          res.status(500).json({
            "message": error
          });
        });
  }
);

/* List all manufacturers */
router.get('/manufacturers', 
  function(req, res, next) {
      connection
        .raw(`select * from manufacturer`)
        .then(function (result) {
          // send back the query result as json
          res.status(200).json({
            "manufacturers": result[0],
          });
        })
        .catch(function (error) {
          // log the error
          console.log(error);
          res.status(500).json({
            "message": error
          });
        });
  }
);

/* Create a manufacturer */
router.post('/manufacturers', 
  body('name','manufacturer name cannot be empty').notEmpty(),
  function(req, res, next) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    } else {
      connection
        .raw(`insert into manufacturer (name) values (?)`,req.body.name)
        .then(function (result) {
          // send back the query result as json
          res.status(201).json({
            "message": "Done",
          });
        })
        .catch(function (error) {
          // log the error
          console.log(error);
          res.status(500).json({
            "message": error
          });
        });
    }
  }
);

/* Update manufacturer :id */
router.put('/manufacturers/:id', 
  body('name','manufacturer name cannot be empty').notEmpty(),
  function(req, res, next) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    } else {
      connection
        .raw(`update manufacturer set name = ? where id = ?`,[req.body.name,req.params.id])
        .then(function (result) {
          // send back the query result as json
          res.status(200).json({
            "message": "Done",
          });
        })
        .catch(function (error) {
          // log the error
          console.log(error);
          res.status(500).json({
            "message": error
          });
        });
    }
  }
);

/* Delete manufacturer :id */
router.delete('/manufacturers/:id', 
  function(req, res, next) {
      connection
        .raw(`delete from manufacturer where id = ?`,req.params.id)
        .then(function (result) {
          // send back the query result as json
          res.status(200).json({
            "message": "Done",
          });
        })
        .catch(function (error) {
          // log the error
          console.log(error);
          res.status(500).json({
            "message": error
          });
        });
  }
);

module.exports = router;
