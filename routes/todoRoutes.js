const {
  getTodos,
  createTodos,
  deleteTodos,
  updateTodo,
} = require("../controllers/todoController");

const router = require("express").Router();

router.get("/", getTodos);
router.post("/", createTodos);
router.delete("/:id", deleteTodos);
router.patch("/:id", updateTodo);

module.exports = router;
