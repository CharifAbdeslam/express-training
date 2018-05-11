const express = require('express');
const passport = require('passport');
const authRouter = express.Router();
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');

const router = function(){
  authRouter.route("/signup")
            .post((req,res)=>{
             var username = req.body.username;
             var email = req.body.email;
             var password = req.body.password;
             var sql = "INSERT INTO user (username , email,password) VALUES (?,?,?)";
             db.query(sql,[username,email,password],function(err,results){
              if(err) throw err;
              const user_id = results.insertId;
              req.login(user_id,function(err){
                if(err) throw err;
                console.log(user_id);
                res.redirect("/list");
              });
    });
  });
authRouter.route("/login")
          .post(passport.authenticate('local',{
              successRedirect:"/list",
              failureRedirect:"/"
            }));
return authRouter;
}
passport.use(new LocalStrategy(
  function(username, password, done) {
      const sql = "SELECT username , password FROM user where username=? AND password=?";
      db.query(sql,[username,password],function(err,results){
        if (err) { return done(err); }
        if (results.length === 0){return done(null, false); }
        return done(null, results);
      })
  }
));
passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});
passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});

module.exports = router;
