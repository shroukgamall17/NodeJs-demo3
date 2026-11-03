
const express = require("express"); /////// framework
const {
  getAllTodos,
  createTodo,
  getTodoById,
  editTodoById,
} = require("../controllers/todos");



let router = express.Router()

router.get("/", (req, res, next) => {
  //////// get all todos
  const todos = getAllTodos();
  res.status(202).json(todos);
});
/////// get one todo by id
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  /// const id = req.params.id
  const foundTodo = getTodoById(id);
  res.status(202).json(foundTodo);
});

router.post("/", (req, res, next) => {
  const todo = req.body;

  const newTodo = createTodo(todo);
  res.status(201).json(newTodo);
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const { title } = req.body;
  let wantedTodo = editTodoById(id, { title });
  res.status(201).json(wantedTodo);
});

module.exports=router