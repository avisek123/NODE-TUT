const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/users", (request, response) => {
  response.send("Hello World User");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
