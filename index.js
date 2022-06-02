const express = require("express");
const app = express();
var myLogger = function (req, res, next) {
  console.log("middleware loggoing");
  next();
};
app.use(myLogger); // middleware
app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/user", myLogger, (request, response) => {
  response.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
