const express = require("express");
require("./db/connection");
const fruitDB = require("./models/Fruits");
const studentsDB = require("./models/Students");
const app = express();
app.use(express.json());

app.post("/students", (req, res) => {
  console.log("body ", req.body);
  const newStudent = new studentsDB(req.body);
  newStudent
    .save()
    .then((student) => {
      res.status(200).send(student);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
