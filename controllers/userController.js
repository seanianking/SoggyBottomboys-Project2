var express = require("express");

var router = express.Router();

const passport = require("../config/passport");
const db = require("../models");

// Home page route
router.get("/", function(req, res) {
  res.render("landing");
});

// Login route
router.post("/", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

// signup page get route
router.get("/signup", function(req, res) {
  res.render("signup");
});

// Signup page post route
router.post("/api/signup", function(req, res) {
  db.Users.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// Portal page route
router.get("/portal", function(req, res) {
  res.render("portal");
});

router.get("/league-home", function(req, res) {
  res.render("league-home");
});

// Logs out user
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
