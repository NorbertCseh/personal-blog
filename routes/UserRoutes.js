const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/test", (req, res) => {
  res.json({
    msg: "Users work",
  });
});

// Get single user with role
router.get("/user/:handle", (req, res) => {
  const errors = {};
  User.findOne({
    handle: req.params.handle,
  })
    .populate("role", ["name"])
    .then((user) => {
      if (!user) {
        errors.nouser = "There is no user like this.";
        res.status(404).json(errors);
      }
      res.json(user);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
