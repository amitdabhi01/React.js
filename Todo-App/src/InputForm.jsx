import React, { useEffect, useState } from "react";

const InputForm = ({ addTodo, editVal }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const handleInputData = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);

    setInput({ task: "", description: "", completed: false });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add New Task</h3>
        </div>
        <div>
          <label htmlFor="task">Task Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter Task Title"
            value={input.task}
            onChange={(e) => handleInputData("task", e)}
          />
        </div>

        <br />
        <div>
          <label htmlFor="description">Task description</label>
          <br />
          <input
            type="text"
            placeholder="Enter Task Description"
            value={input.description}
            onChange={(e) => handleInputData("description", e)}
          />
        </div>
        <br />
        <button type="submit">{editVal ? "update" : "Add Task"}</button>
      </form>
    </>
  );
};

export default InputForm;
