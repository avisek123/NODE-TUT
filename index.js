const express = require("express");
require("./db/connection");
const studentRouter = require("./routers/studentRouter");
const registerRoute = require("./routers/register");
const app = express();
app.use(express.json());
// app.use(studentRouter);
app.use(registerRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
//https://iavisek.herokuapp.com/
