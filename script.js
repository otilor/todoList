const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", addTodo)

function addTodo(e) {
    e.preventDefault();
    let todoItem = document.getElementById("todo-input").value;
    console.info(todoItem);
    todoForm.reset();
}