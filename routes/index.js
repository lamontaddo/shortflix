var express = require('express');
var router = express.Router();


const fs = require('fs');
const path = require('path');
const movies = require('../movies')

/* GET home page. */
router.get('/',  function(req, res, next) {
 
  
  res.render('movies', { title: 'SHORTFLIX',description:'descrption', movies: movies });
 
});

module.exports = router;
