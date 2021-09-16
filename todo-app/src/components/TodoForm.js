import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus() /*sets focus to text input on page load*/

  })

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
        ref={inputRef}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
