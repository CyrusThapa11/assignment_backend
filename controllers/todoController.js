const Todo = require("../models/todo");

module.exports.getTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json({ message: "It Works", todos });
};

module.exports.createTodos = async (req, res) => {
  console.log("req.body.text", req.body.text);
  const todo = new Todo(req.body);
  await todo.save();
  const todos = await Todo.find({});
  res.status(200).json({ message: "It Works", todos });
};

module.exports.deleteTodos = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  const todos = await Todo.find({});

  res.status(200).json({ message: "It Works", todos });
};

module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, { ...req.body });
  const todos = await Todo.find({});
  res.status(200).json({ message: "It Works", todos });
};
