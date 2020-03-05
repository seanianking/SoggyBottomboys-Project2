var express = require("express");

var router = express.Router();

// var user = require("../models/user.js");

// Home page route
router.get("/", function(req, res) {
  res.render("landing");
});

// Portal page route
router.get("/portal", function(req, res) {
  res.render("portal");
});

module.exports = router;
