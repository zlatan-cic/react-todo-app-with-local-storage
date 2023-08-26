import React from "react";
import { useState } from "react";

// library
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  // State
  const [task, setTask] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(e);
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask('');
  }

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label 
          htmlFor="task"
          className="label"
        >
          Enter Task
        </label>
      </div>
      <button 
        className="btn"
        aria-label="Add Task"
        type="submit"
      >
      {/* Heroicons */}
      <PlusIcon className="h-6 w-6 text-blue-500" />
      </button>
    </form>
  );
};

export default CustomForm;
