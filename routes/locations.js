const express = require("express");
const router = express.Router();
const Locations = require("../models/Locations");

// middleware that checks if a user is logged in
const loginCheck = () => {
  return (req, res, next) => {
    // passport method req.isAuthenticated()
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/auth/login");
    }
  };
};

// Add Location

router.post(
  "/",
  /* loginCheck(), */
  (req, res) => {

    console.log(req.body)
    console.log('check')
    const { name, website, bar, tapRoom, bottleShop, address, logo, addedBy } = req.body;

    Locations.create({
      name, website, bar, tapRoom, bottleShop, address, logo, addedBy
    })
      .then(location => {
        console.log(`adding location: ${location}`);
        res.status(201).json(location);
      })
      .catch(err => {
        console.log('ERRRRR')
        res.json(err);
      });
  }
);

module.exports = router;