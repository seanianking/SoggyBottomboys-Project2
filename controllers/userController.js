var express = require("express");

var router = express.Router();

// var user = require("../models/user.js");

// Home page route
router.get("/", function(req, res) {
  res.render("landing");
});

// Portal page route
router.get("/signup", function(req, res) {
  res.render("signup");
});

// Portal page route
router.get("/portal", function(req, res) {
  res.render("portal");
});

// Logs out user
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
