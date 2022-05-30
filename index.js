const http = require("http");
const server = http
  .createServer(function (req, res) {
    res.write("Hello World");
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });

// we use http module to create server
