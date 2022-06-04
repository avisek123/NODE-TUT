// import mongoose
var mongoose = require("mongoose");
// create a schema for the data
var employeeScheme = mongoose.Schema({
  name: String,
  age: Number,
  salary: Number,
  emailID: String,
});
