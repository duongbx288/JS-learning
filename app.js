//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event listeners
document.addEventListener('DOMContentLoaded', getTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

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

    //Save to local storage
    saveLocalTodo(todoInput.value);

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
        //Animation
        todo.classList.add('fall');
        removeLocalTodo(todo);
        // wait for transition to finish then remove the element
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.add('completed'); 
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    // const todos = document.querySelectorAll('.todo'); ->  find childrens with selector alll
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// Messing with local storage
function saveLocalTodo(todo){
    // CHECK - if already have a 'todos' or not
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Messing with local storage
function getTodo(){
        console.log('hello');
        // CHECK - if already have a 'todos' or not
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
    
        todos.forEach(function(todo){
            const todoDiv = document.createElement("div");
             todoDiv.classList.add("todo");

             // Create LI with class 'todo-item'
             const newTodo = document.createElement('li');
             newTodo.innerText = todo;
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
        });
}

function removeLocalTodo(todo){
    // CHECK - if already have a 'todos' or not
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}