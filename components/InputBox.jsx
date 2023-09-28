"use client"
import React, { useState } from "react";

const InputBox = () => {

    const [text, setText] = useState('')

    const handleForm = () => {
        console.log('value')
    }
  return (
    <div className="mt-5">
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter todo item"
          className="input input-bordered w-full max-w-md"
        />
        <button className="btn btn-neutral ml-4">Add Todo</button>
      </form>
    </div>
  );
};

export default InputBox;
