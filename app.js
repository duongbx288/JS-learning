//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions

function addTodo(event){
    event.preventDefault(); //Prevent from submitting
    console.log('hello');

    // Add a 'todo' DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI with class 'todo-item'
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item'); 
    todoDiv.appendChild(newTodo);

    //Check mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list (the 'to-do list' div)
    todoList.appendChild(todoDiv);
    
    //Clear Todo input value
    todoInput.value ="";
}

function deleteCheck(e){
    const item = e.target;
    
    //DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
}

