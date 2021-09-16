import React, {Component} from "react";

import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import reactDom from "react-dom";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
