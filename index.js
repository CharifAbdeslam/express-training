const express = require('express');
var menu = "next one";
const app = express();
const router = express.Router();
const port = process.env.PPORT || 3000;


app.use(express.static("public_html"))
app.set("views", "./src/view");
app.set("view engine", "ejs");

router.route("/").get((req, res) => {
  res.json("Hello welcome to exchange");
});
router.route("/list").get((req, res) => {
  res.json("you are in the list view");
});
app.use("/exchange", router);
app.get("/", (req, res) => {
  res.render("index", {
    username: 'JSX username',
    varmenu: menu
  });
});

app.listen(3000, (err) => {
  console.log("App up and running on port: " + port);
});
