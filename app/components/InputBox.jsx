"use client";
import React, { useState } from "react";

const InputBox = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = (event) => {
    setText("");
    setTodo(text);
    console.log(text);
    console.log(typeof(todo))
    console.log(todo, 'todo')
  };
  return (
    <>
      <div className="mt-5">
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Enter todo item"
          className="input input-bordered w-full max-w-md"
        />
        <button onClick={handleClick} className="btn btn-neutral ml-3">
          Add Todo
        </button>
      </div>

      <div>
        {
          todo
         
        }
      </div>
    </>
  );
};

export default InputBox;
