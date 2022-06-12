const express = require("express");
const router = express.Router();
const studentsDB = require("../models/students");

router.post("/students", async (req, res) => {
  try {
    const newStudent = new studentsDB(req.body);
    const result = await newStudent.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(e);
  }
});
// read the students data
router.get("/students", async (req, res) => {
  try {
    const students = await studentsDB.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send(error);
  }
});
// // read individual students data
// router.get("/students/:id", async (req, res) => {
//   try {
//     const student = await studentsDB.findById(req.params.id);
//     res.status(200).send(student);
//     if (!student) {
//       res.status(404).send("Student not found");
//     } else {
//       res.status(200).send(student);
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
// delete a student
router.delete("/students/:id", async (req, res) => {
  try {
    const student = await studentsDB.findByIdAndDelete(req.params.id);
    if (!student) {
      res.status(404).send("Student not found");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/students/:id", async (req, res) => {
  try {
    const student = await studentsDB.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!student) {
      res.status(404).send("Student not found");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
