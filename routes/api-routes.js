var express = require("express");

var router = express.Router();

const db = require("../models");

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