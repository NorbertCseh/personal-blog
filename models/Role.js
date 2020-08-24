const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: String,
  rights: Number,
});

module.exports = Role = mongoose.model("roles", RoleSchema);
