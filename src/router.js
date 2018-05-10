const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connect = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'heaton1985',
  database : 'users'
});
connect.connect((err)=>{
  if(err){
    console.log(err);
  }
});

router.route("/").get((req, res) => {
  res.render("index");
});

router.route("/list").get((req, res) => {
  var sql = "select * from user";
  connect.query(sql,(err,results,field)=>{
    res.send(results);
  });
});

router.route("/list").post((req,res)=>{
})
router.route("/exchange").get((req, res) => {
  res.json("you are in the exhange view");
});

module.exports = router;
