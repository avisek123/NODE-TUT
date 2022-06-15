const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  confirmPassword: String,
});
const registerModel = mongoose.model("Register", registerSchema);
module.exports = registerModel;
