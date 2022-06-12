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
// read the students data
app.get("/students", async (req, res) => {
  try {
    const students = await studentsDB.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send(error);
  }
});
// // read individual students data
app.get("/students/:id", async (req, res) => {
  try {
    const student = await studentsDB.findById(req.params.id);
    res.status(200).send(student);
    if (!student) {
      res.status(404).send("Student not found");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
