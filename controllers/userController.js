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
  if (!req.user) {
    res.redirect("/");
  } else {
    res.render("portal");
  }
});

router.get("/league-home", function(req, res) {
  if (!req.user) {
    res.redirect("/");
  } else {
    res.render("league-home");
  }
});

router.get("/league-search", function(req, res) {
  if (!req.user) {
    res.redirect("/");
  } else {
    db.League.findAll({}).then(function(dbLeague) {
      // res.json(dbLeague);
      // console.log(JSON.stringify(dbLeague, null, 2));
      res.render("league-search", {
        dbLeague: dbLeague.map(e => ({
          league_name: e.league_name,
          sport: e.sport,
          age_range: e.age_range,
          city: e.city,
          state: e.state,
          location: e.location
        }))
      });
    });
  }
});

// Logs out user
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
