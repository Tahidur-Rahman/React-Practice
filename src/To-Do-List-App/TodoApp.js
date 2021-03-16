import React, { useState } from "react";
import "./todo.css";

const TodoApp = () => {
  const [Todo, setTodo] = useState(["Study", "Excercise", "Sleeping"]);
  return (
    <div className="todo">
      <h2>Things-To-Do</h2>
      <div>
        {Todo.map((todo, index) => {
          return (
            <h3 key={todo} id="todo-item">
              <span>{index + 1}</span>
              {todo} <span id="delete">❌</span>
            </h3>
          );
        })}
      </div>
      <form>
        <input type="text" id="input" />

        <input id="btn" type="submit" value="Add-TO-DO" />
      </form>
    </div>
  );
};

export default TodoApp;
