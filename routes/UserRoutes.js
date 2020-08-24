const express = require("express");
const { models } = require("mongoose");
const { model } = require("../models/Role");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    msg: "Users work",
  });
});

module.exports = router;
