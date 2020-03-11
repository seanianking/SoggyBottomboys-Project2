
module.exports = function(app) {

    const db = require("../models");


// Signup page post route
app.post("/api/signup", function(req, res) {
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

  app.post("/api/league-home/:league_name", function(res,req) {
      db.league.findone({
          where:{
              league:req.params.league
          }
      })
      .then(function(dbLeague){
          res.json(dbLeague);
          console.log(dbLeague)
      })
  });
};