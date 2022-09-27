import React, { useState } from "react";

const AddToDo = ({ addTodo }: any) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const newTodo = (e: any) => {
    e.preventDefault();

    const newTodo = { task: value, status: "pending" };
    addTodo(newTodo);
    setValue("");
  };

  return (
    <form className="form" onSubmit={newTodo}>
      <label>Add:</label>
      <input
        className="form-input"
        type="text"
        placeholder="Add new task"
        value={value}
        onChange={handleInputChange}
        id="addTodo"
      />
    </form>
  );
};

export default AddToDo;
