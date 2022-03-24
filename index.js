const express = require("express");
const my = require("./my-middleware.js");
const route = express.Router();
const app = express();
const myLogger = (req, res, next) => {
  console.log("Middleware working");
  next();
};
// Router level middleware
route.get("/", myLogger, (request, response) => {
  response.send("Hello World");
});

app.get("/users/:userName", (request, response, next) => {
  // response.send(`Hello ${request.params.userName}`);
  if (request?.params?.userName === "Avisek") {
    response.send(`Hello ${request.params.userName}`);
  } else {
    response.send("Invalid User");
  }
  next();
  // we use next() to pass the control to the next middleware
});

// app.use(myLogger); // Application level middleware
app.use("/", route);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
