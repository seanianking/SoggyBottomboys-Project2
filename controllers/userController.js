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
      res.redirect("/portal");
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
    db.UsersLeagues.findAll({
      where: {
        UserId: req.user.id

      }, 
      include: [db.League]
    }).then(function(dbLeague){

      // res.json(dbLeague);
      res.render("portal", {
        dbLeague: dbLeague.map(e => ({
          id: e.League.id,
          league_name: e.League.league_name,
          sport: e.League.sport,
          age_range: e.League.age_range,
          city: e.League.city,
          state: e.League.state,
          location: e.League.location
        }))
      });
      console.log(dbLeague);

    })

  }
});

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
router.post("/api/register/:id", function(req) {
  console.log(req.user);

  function checkRegister(LeagueId, UserId){
    db.UsersLeagues.findOne({
      where: {
        LeagueId: LeagueId,
        UserId: UserId
      }
    }).then( dbUsersLeagues => {
      if(!dbUsersLeagues){
        db.UsersLeagues.create({
          LeagueId: req.params.id,
          UserId: req.user.id
        });
      } else {
        console.log("You are already registered for that league!");
        
      }
    } )
  }
  checkRegister(req.params.id, req.user.id);
 
});

// Get route to league-home page
router.get("/league-home/:id", function(req, res) {
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
