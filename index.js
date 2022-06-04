const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbConnect = () => {
  mongoose
    .connect(
      `mongodb+srv://Mongodb:reXoIJTzp7WhF9rl@cluster0.to29v.mongodb.net/MyFirstDb?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};
// A schema  define the structure of the data in the db
const fruitSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});
const FruitModel = mongoose.model("FruitDB", fruitSchema);
const fruitObject = new FruitModel({
  name: "Apple",
  price: 100,
  quantity: 10,
});
const fruitObjectOne = new FruitModel({
  name: "Banana",
  price: 100,
  quantity: 10,
});
// insert multiple documents
// FruitModel.insertMany([fruitObject, fruitObjectOne], (err, docs) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(docs);
//   }
// });
// read documents
const getFruits = async () => {
  try {
    const result = await FruitModel.find();
    console.log("result", result);
  } catch (error) {
    console.log(error);
  }
};
getFruits();
app.listen(3000, () => {
  dbConnect();
  console.log("Server is running on port 3000");
});
