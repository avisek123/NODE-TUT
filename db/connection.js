const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://Mongodb:reXoIJTzp7WhF9rl@cluster0.to29v.mongodb.net/MyFirstDb?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
