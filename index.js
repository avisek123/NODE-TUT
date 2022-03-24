const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/users/:Id?", (request, response) => {
  if (request.params.Id) {
    response.status(200).send(`User ${request.params.Id}`);
  } else {
    response.status(200).send(`User`);
  }
});
app.get("/flights/:from?.:to?", (request, response) => {
  response
    .status(200)
    .send(`Search fro flights ${request.params.from}-${request.params.to}`);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
