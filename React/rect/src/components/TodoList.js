import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterTodo }) => {
    console.log(filterTodo);
    return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo) => (
          <Todo
          /// 'todo' here is the element, 'todos' is one of the App state
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
