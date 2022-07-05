const express = require("express");
const router = express.Router();
const todoDB = require("../models/Todo");
router.post("/todos", async (req, res) => {
  try {
    const newTodo = new todoDB(req.body);
    const result = await newTodo.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
