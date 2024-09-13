var express = require('express');
var router = express.Router();
const movies = require('../movies')

router.param('id',(req,res,next)=>{
console.log('hit on the params')

next()
})

router.get('/:id',(req,res,next)=>{

    console.log(req.params.id)
   let result = movies.find((movie)=>movie.id == req.params.id )
   res.render('index',result)
         
})

module.exports = router;