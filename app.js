//Variablar
const formInput  = document.querySelector(".form-input");
const sideBar = document.querySelector(".side-bar");
const formButton = document.querySelector(".login");
const formHolder = document.querySelector(".form-holder");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const slideButton = document.querySelector(".nav-slide-button");




//Evenlisteners

//Login and todo transition
formButton.addEventListener("click", function(){
  formHolder.classList.add("form-slider")
  document.querySelector(".todo").classList.add("invisible")
  formHolder.addEventListener("transitionend", formSlide);
  function formSlide(){
    
    formHolder.classList.add("login-Invisible");
  };

  
  
  
  
} );
todoList.addEventListener("click", deleteComplete);
slideButton.addEventListener("click", slider);

//Transition to todo list



//adding of todolists
function addTodo() {
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-thing");
  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Avklarad Knapp
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Skräp Knapp
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Append til resten
  todoList.appendChild(todoDiv);
  todoInput.value = "";
};

//Ta bort div 
function deleteComplete(e) {
  const target = e.target;
  if (target.classList[0] === "trash-btn") {
    const todoDiv = target.parentElement;
    todoDiv.classList.add("trash");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
  if (target.classList[0] === "complete-btn") {
    const todoDiv = target.parentElement;
    todoDiv.classList.toggle("completed");
    todoDiv.addEventListener("transitionend", completeTodo);
    function completeTodo() {
      sideBar.appendChild(todoDiv);
      todoDiv.classList.toggle("completed");
      
      
    };
    
  };
};
  //Ta fram slidern
function slider(){
  sideBar.classList.toggle("sidebar-slide");
  slideButton.classList.toggle("button-slide");

};


