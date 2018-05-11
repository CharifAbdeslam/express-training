const express = require('express');
const router = express.Router();
var db = require('./db');

  router.route("/").get(function(req, res){
    res.render("index");
  });

  router.route("/list").get(authenticationMiddleware(),function(req, res){
    var sql = "select * from user";
      db.query(sql,function(err,results,field){
        res.send(results);
      });
  });
  router.route("/exchange").get(authenticationMiddleware(),function(req, res){
    res.json("you are in the exhange view");
  });

  function authenticationMiddleware () {
  	return (req, res, next) => {
  	    if (req.isAuthenticated()) return next();
  	    res.send('Please login to view this page')
  	}
  }

module.exports = router;
