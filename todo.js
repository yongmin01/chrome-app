const todoDiv = document.querySelector(".todo");
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector(".todoInput");
let todos = [];

function saveTodo() {
  localStorage.setItem("todo", JSON.stringify(todos));
}
function paintTodo(target) {
  const todo = document.createElement("div");
  todo.id = target.id;
  todo.classList.add("todoElement");
  const todoSpan = document.createElement("span");
  todoSpan.innerText = `${target.todo}`;
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.innerText = "X";
  deleteTodoBtn.addEventListener("click", deleteTodo);

  todo.appendChild(todoSpan);
  todo.appendChild(deleteTodoBtn);
  todoDiv.appendChild(todo);
}
function deleteTodo(t) {
  const targetTodo = t.target.parentNode;
  targetTodo.remove();

  todos = todos.filter((t) => t.id !== parseFloat(targetTodo.id));
  saveTodo();
}
function handleTodoSubmit(e) {
  e.preventDefault();
  const todo = {
    id: Math.random(),
    todo: todoInput.value,
  };
  todoInput.value = "";
  todos.push(todo);
  saveTodo();
  paintTodo(todo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

if (localStorage.todo !== null) {
  const refreshTodos = JSON.parse(localStorage.getItem("todo"));
  todos = refreshTodos;
  refreshTodos.forEach(paintTodo);
}
