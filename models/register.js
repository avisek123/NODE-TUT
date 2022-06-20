const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  confirmPassword: String,
});
registerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
const registerModel = mongoose.model("Register", registerSchema);
module.exports = registerModel;
