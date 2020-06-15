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
  loginCheck(),
  (req, res) => {

    const { name, website, bar, tapRoom, bottleShop, address, logo, addedBy, latitude, longitude } = req.body;

    Locations.create({
      name, website, bar, tapRoom, bottleShop, address, logo, addedBy, coordinates: [latitude, longitude]
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

// Get all Locations
router.get("/", (req, res) => {
  Locations.find()
    .then(locations => {
      res.status(200).json(locations);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Delete a location

router.delete("/:id", loginCheck(), (req, res) => {
  const id = req.params.id;
  Locations.findByIdAndDelete(id)
    .then(location => {
      res.status(200).json(location);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;