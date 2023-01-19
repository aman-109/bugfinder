const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
 
});

const User = mongoose.model("user", users);

module.exports = User;