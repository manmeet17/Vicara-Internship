var express = require('express');
var router = express.Router();
var passport=require('../config/passport');
const User=require('../models/users');

router.post('/signup',(req,res)=>{
  const {email,password,name,admin}=req.body;
  User.findOne({email},(err,user)=>{
    if(user){
      console.log("Exists");
      return res.json({
        status: 400,
        error: `User already registered with ${email}`
      });
    }

      const newUser= new User();
      newUser.email=email;
      newUser.password=newUser.hashPassword(password);
      newUser.name=name;
      newUser.admin=admin;
      newUser.save((err,user) => {
        if(err) return res.json(err);
        
        return res.json(user);
      });
  });
});

router.get('/signup',function(req,res){
  res.json({
    status:200,
    message: "Ok i reached login"
  });
});

module.exports = router;
