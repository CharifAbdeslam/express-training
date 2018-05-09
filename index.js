const express = require('express');

var app = express();
const port = process.env.PPORT || 3000;
app.use(express.static("public_html"))
app.set("views","./src/view");
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("index",{username:'JSX username'});
});

app.listen(3000,(err)=>{
  console.log("App up and running on port: " + port);
});
