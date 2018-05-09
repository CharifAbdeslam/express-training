const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
  res.render("index");
});
router.route("/list").get((req, res) => {
  res.json("you are in the list view");
});
router.route("/exchange").get((req, res) => {
  res.json("you are in the exhange view");
});

module.exports = router;
