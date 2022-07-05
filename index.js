const express = require("express");
require("./db/connection");
const todoRouter = require("./routers/todo");
const app = express();
app.use(express.json());
app.use(todoRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
//https://iavisek.herokuapp.com/
