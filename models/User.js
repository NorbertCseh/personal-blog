const mongoose = require("mongoose");
const Role = require("./Role");

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  avatar: String,
  password: String,
  register_date: Date,
  role: Role,
});

exports.default = User = mongoose.model("user", UserSchema);
