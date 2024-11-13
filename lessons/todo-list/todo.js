let todoList = JSON.parse(localStorage.getItem("todos")) || [];
let filterStatus = "all";

const addBtn = document.getElementById("button");

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});
