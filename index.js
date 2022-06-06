const express = require("express");
const mongoose = require("mongoose");
const fruitDB = require("./models/Fruits");
const app = express();
const fruitModel = mongoose.model("Fruits", fruitDB);
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

app.listen(3000, () => {
  dbConnect();
  console.log("Server is running on port 3000");
});
