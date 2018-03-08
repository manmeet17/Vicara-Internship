var LocalStrategy=require('passport-local').Strategy;
var User=require('../models/users');
const passport=require('passport');

passport.serializeUser(function(user,done){
        console.log(user);
        done(null,user.id);
});

passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });
passport.use('local-signup',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
},
function(req,email,password,done){
        process.nextTick(function(){
            User.findOne({'email':email},function(err,user){
                if(err) return done(err);
                if(user){
                    return done(null,false,req.flash('signUpMsg', "The email already exists."));
                }
                else{
                    var newUser=new User();
                    newUser.email=email;
                    newUser.password=newUser.hashPassword(password);

                    newUser.save(function(err){
                        if(err)
                            throw err;
                        return done(null,newUser);
                    });
                }
            });
        });
    }
));

module.exports=passport;