const mongoose = require("mongoose");

const msgSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("message", msgSchema, "Messages");
