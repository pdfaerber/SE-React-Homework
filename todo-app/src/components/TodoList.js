import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(todo, ...todos);
  };

  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              todo.isComplete = !todo.isComplete
          }
          return todo
      }) 
      setTodos(updatedTodos)

  } 

  return (
    <div>
      <h3>What's on the list today?</h3>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
