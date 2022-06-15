const express = require("express");
const router = express.Router();
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
module.exports = router;
