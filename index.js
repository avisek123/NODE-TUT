const express = require("express");
require("./db/connection");
const fruitDB = require("./models/Fruits");
const studentsDB = require("./models/Students");
const app = express();
app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const newStudent = new studentsDB(req.body);
    const result = await newStudent.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(e);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
