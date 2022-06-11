const mongoose = require("mongoose");

const fruitesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  Quantity: Number,
});
const fruitesModels = mongoose.model("Fruits", fruitesSchema);
module.exports = fruitesModels;
