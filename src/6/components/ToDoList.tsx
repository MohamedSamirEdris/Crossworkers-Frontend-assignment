import React, { FC } from "react";
import ToDo from "./ToDo";
import { Todo } from "../models/types";

interface TodoProps {
  list: Todo[];
  setList: Function;
}
const ToDoList: FC<TodoProps> = ({ list, setList }) => {
  const toggleTodo = (id: number | string): void => {
    setList((prev: any) =>
      prev.map((todo: Todo) => {
        if (todo.id === id) {
          if (todo.status === "pending") {
            todo.status = "done";
          } else {
            todo.status = "pending";
          }
        }
        return todo;
      })
    );
  };

  const lists = () => {
    const doneTodos = list.filter((todo: Todo) => todo.status === "done");
    const pendingTodos = list.filter((todo: Todo) => todo.status === "pending");
    return { doneTodos, pendingTodos };
  };

  const deleteTodo = (id: number | string) => {
    const removedArr = [...list].filter((todo) => todo.id !== id);
    setList(removedArr);
  };
  return (
    <div>
      <section className="todos">
        <div className="todos-container">
          <h3 className="todos-title">Pending</h3>
          {lists().pendingTodos.map((todo: any) => (
            <ToDo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
        <div className="todos-container">
          <h3 className="todos-title">Done</h3>
          {lists().doneTodos.map((todo: any) => (
            <ToDo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToDoList;
