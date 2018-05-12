const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;
const globalRouter = require('./src/router');
const authRouter = require('./src/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public_html"));
app.use(cookieParser());
app.use(session({
  secret: 'xazeazsdazeazeaze',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.set("views", "./src/view");
app.set("view engine", "ejs");
app.use("/auth",authRouter);
app.use("/", globalRouter);


app.listen(3000, (err) => {
  console.log("App up and running on port: " + port);
});
