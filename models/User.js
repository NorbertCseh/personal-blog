const mongoose = require("mongoose");
const Role = require("./Role");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  username: String,
  handle: String,
  avatar: String,
  password: String,
  register_date: Date,
  role: {
    type: Schema.Types.ObjectId,
    ref: "roles",
  },
});

module.exports = User = mongoose.model("users", UserSchema);
