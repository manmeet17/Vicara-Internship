var express = require('express');
const User=require('../models/users');

module.exports=(app,passport)=> {
  app.post('/auth/signup',(req,res)=>{
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
  
  app.post('/auth/login',
    passport.authenticate('local-login',{session: true}),
    function(req,res){
      console.log("\n\n\n\n App post ka user: "+req.user);
    }
  );
  
}
