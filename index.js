const http = require("http");
const dataControl = (req, res) => {
  res.write("<h1>Hello World</h1>");
  res.end();
};
const server = http.createServer(dataControl);
server.listen(3000);
console.log("Server is running on port 3000");
