import React, { FC } from "react";
import { Todo } from "../models/types";

interface TodoProps {
  todo: Todo;
  deleteTodo: Function;
  toggleTodo: Function;
}

const ToDo: FC<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
  const { id, task, status } = todo;

  return (
    <div key={id} className="todos-item">
      <input
        checked={status === "done" && true}
        type="checkbox"
        onChange={() => toggleTodo(id)}
      />
      <p className={status === 'done' ? "complete" : ""}>{task}</p>
      <span onClick={() => deleteTodo(id)} className="delete">&times;</span>
    </div>
  );
};

export default ToDo;
