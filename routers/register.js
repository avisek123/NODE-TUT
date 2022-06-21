const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Register = require("../models/register");
router.post("/register", async (req, res) => {
  try {
    const newStudent = new Register(req.body);
    const result = await newStudent.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(e);
  }
});
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const student = await Register.findOne({
      email: email,
      password: password,
    });
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      res.status(404).send("Invalid email or password");
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
