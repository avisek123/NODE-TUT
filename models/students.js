const mongoose = require("mongoose");
const studentsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
});
const studentsModel = mongoose.model("Students", studentsSchema);
module.exports = studentsModel;
