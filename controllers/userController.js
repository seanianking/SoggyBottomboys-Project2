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
  console.log(req.body);

  db.Users.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    age: req.body.age,
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

// router.post("/portal");

// router.get("/league-home", function(req, res) {
//   if (!req.user) {
//     res.redirect("/");
//   } else {
//     res.render("league-home");
//   }
// });

/// Get Route will display all available leagues in league-seach page
router.get("/league-search", function(req, res) {
  if (!req.user) {
    res.redirect("/");
  } else {
    db.League.findAll({}).then(function(dbLeague) {
      // res.json(dbLeague);
      // console.log(JSON.stringify(dbLeague, null, 2));
      res.render("league-search", {
        dbLeague: dbLeague.map(e => ({
          id: e.id,
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

// Post route to CREATE NEW LEAGUE
router.post("/api/add", function(req) {
  console.log(req.body);
  db.League.create({
    league_name: req.body.formLeagueName,
    sport: req.body.formSportName,
    age_range: req.body.selectAge,
    city: req.body.inputCity,
    state: req.body.inputState,
    location: req.body.inputLocation
  }).then(function() {});
});

// Post route to portal page when registering for league
// router.post("/api/register/:id", function(req, res) {
//   db.UsersLeagues.create({});
// });

// Get route to league-home page
router.get("/api/league-home/:id", function(req, res) {
  if (!req.user) {
    res.redirect("/");
  } else {
    db.League.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbLeague) {
      console.log(dbLeague.dataValues);
      res.render("league-home", {
        dbLeague: dbLeague.dataValues
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
