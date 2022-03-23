const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/users/:Id?", (request, response) => {
  console.log(request?.params);
  response.status(200).send(`User ${request.params.Id}`);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
