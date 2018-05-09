const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./src/router');

app.use(express.static("public_html"))
app.set("views", "./src/view");
app.set("view engine", "ejs");


app.use("/", router);

app.listen(3000, (err) => {
  console.log("App up and running on port: " + port);
});
