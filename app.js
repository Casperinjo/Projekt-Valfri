const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

function click() {
  document.querySelector(".form-holder").classList.add("Invisible");
};

todoList.addEventListener('click', deleteCheck);

function addTodo() {
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-thing");
  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo);
  //Avklarad Knapp
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Skräp Knapp
  const  trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Append til resten
  todoList.appendChild(todoDiv);
};
function deleteCheck (){
  const item  = e.target;
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.
    todo.classList("completed");
  }
};

