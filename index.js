const express = require("express");
const mongoose = require("mongoose");
const fruitDB = require("./models/Fruits");
const app = express();
app.use(express.json());
// const fruitModel = mongoose.model("Fruits", fruitDB);
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
// insert data
app.get("/", async (req, res) => {
  try {
    // const insertData = await fruitDB.create(req.body);
    // res.json({ data: insertData });
    res.json({ data: "hello" });
  } catch (error) {
    res.status(4000).json({ error });
  }
});
// const insertData = () => {
//   const data = new fruitDB({
//     name: "Apple",
//     price: 10,
//     Quantity: 10,
//   });
//   data.save();
// };
// insertData();

app.listen(3000, () => {
  dbConnect();
  console.log("Server is running on port 3000");
});
