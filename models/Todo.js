const mongoose = requires("mongoose");
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
