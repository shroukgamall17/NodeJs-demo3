
const fs = require("fs");

function getAllTodos() {
  return JSON.parse(fs.readFileSync("./data.json", { encoding: "utf-8" }));
}

function createTodo(todo) {
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" }),
  );
  data.push(todo);
  fs.writeFileSync("./data.json", JSON.stringify(data));
  return todo;
}
function getTodoById(id) {
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" }),
  );
  const foundTodo = data.find(function (todo) {
    return todo.id == id;
  });
  return foundTodo;
}

function editTodoById(id, updatedTodo) {
  const data = JSON.parse(
    fs.readFileSync("./data.json", { encoding: "utf-8" }),
  );

  const wantedTodo = data.find(function (todo) {
    return todo.id == id;
  });

  fs.writeFileSync("./data.json", JSON.stringify(data));
  return wantedTodo;
}


module.exports={getAllTodos, createTodo, getTodoById, editTodoById}