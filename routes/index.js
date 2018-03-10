var express = require('express');
var router = express.Router();
var passport=require('../config/passport');
const User=require('../models/users');

router.post('/login',passport.authenticate('local-signup',{
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash: true
}))

router.get('/login',function(req,res){
  res.json({
    status:200,
    message: "Ok i reached login"
  });
});

module.exports = router;
