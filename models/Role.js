const mongoose = require("mongoose");

const RoleSchema = mongoose.Schema({
  name: String,
  rights: Number,
});

module.exports = Role = mongoose.model("role", RoleSchema);
