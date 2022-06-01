const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/home/:id?", (request, response) => {
  response.send("<h1>Hello World</h1>");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
