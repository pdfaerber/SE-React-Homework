import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => {
      setInput(e.target.value);/*set to whatever user enters as todo item*/
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      /*assigns a random id mumber to todo item when form is submitted*/
      id: Math.floor(Math.random() * 10000),
      text: input /*whatever the user enters as a todo item*/,
    });
    setInput('');//resets text input after submit
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange = {handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
