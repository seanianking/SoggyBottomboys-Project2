module.exports = function(app) {

    const db = require("../models");
    const passport = require("../config/passport");

// Home page route
app.get("/", function(req, res) {
    res.render("landing");
  });

  // Login route
app.post("/", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // signup page get route
app.get("/signup", function(req, res) {
    res.render("signup");
  });

// Portal page route
app.get("/portal", function(req, res) {
    if (!req.user) {
      res.redirect("/");
    } else {
      res.render("portal");
    }
  });
  

  app.get("/league-home", function(req, res) {
    if (!req.user) {
      res.redirect("/");
    } else {
      res.render("league-home");
    }
  });

  app.get("/league-search", function(req, res) {
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
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};