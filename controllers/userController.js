var express = require("express");

var router = express.Router();

const passport = require("../config/passport");

// var user = require("../models/user.js");

// Home page route
router.get("/", function(req, res) {
  res.render("landing");
});

router.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

// signup page get route
router.get("/signup", function(req, res) {
  res.render("signup");
});

// router.post("/api/signup", function(req, res) {
//   db.User.create({
//     email: req.body.email,
//     password: req.body.password
//   })
//     .then(() => {
//       res.redirect(307, "/api/login");
//     })
//     .catch(err => {
//       res.status(401).json(err);
//     });
// });

router.post("/");

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
