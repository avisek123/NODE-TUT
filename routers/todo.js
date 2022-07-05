const express = require("express");
const router = express.Router();
const todoDB = require("../models/Todo");
// post todos
router.post("/todos", async (req, res) => {
  try {
    const newTodo = new todoDB(req.body);
    const result = await newTodo.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get todos
router.get("/todos", async (req, res) => {
  try {
    const result = await todoDB.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
// delete by id
router.delete("/todos/:id", async (req, res) => {
  try {
    const result = await todoDB.findByIdAndDelete(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
// update by id
router.put("/todos/:id", async (req, res) => {
  try {
    const result = await todoDB.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
