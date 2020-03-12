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

// Post route to create new league
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

// Get route to leage-home page
router.get("/api/leage-home/:id", function(req, res) {
  console.log("click");
  if (!req.user) {
    res.redirect("/");
  } else {
    db.League.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbLeague) {
      res.render("league-search", {
        dbLeague: dbLeague.map(e => {
          // let saturatedAge;
          // switch (e.age_range) {
          //   case "1":
          //     saturatedAge = "5-7";
          //     break;
          //   case "1":
          //     saturatedAge = "8-10";
          //     break;
          //   case "2":
          //     saturatedAge = "11-13";
          //     break;
          //   case "3":
          //     saturatedAge = "14-17";
          //     break;
          //   case "4":
          //     saturatedAge = "18+";
          //     break;
          //   default:
          //     saturatedAge = "Senior";
          //     break;
          // }
          // console.log(saturatedAge);
          return {
            league_name: e.league_name,
            sport: e.sport,
            age_range: e.age_range,
            city: e.city,
            state: e.state,
            location: e.location
          };
        })
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
