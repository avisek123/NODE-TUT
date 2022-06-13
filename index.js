const express = require("express");
require("./db/connection");
const studentRouter = require("./routers/studentRouter");
const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
//
