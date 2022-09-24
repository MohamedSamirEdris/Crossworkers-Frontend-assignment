import React, { useState, FunctionComponent } from "react";
import SearchToDo from "./components/SearchToDO";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { Todo } from "./models/types";
import data from "./models/data.json";

// Style
import "./index.scss";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */

const Task6: FunctionComponent = () => {
  const [list, setList] = useState<Todo[]>(data);

  const addTodo = (todo: Todo) => {
    if (!todo) {
      return alert("Todo can not be empty!");
    }
    const newTodos = [...list, todo];
    setList(newTodos);
  };

  const searchTodo = (value: string) => {
    if (value !== "") {
      const newTodos = list.filter((todo: any) =>
        todo.task.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setList(newTodos);
    } else {
      setList(list);
    }
  };

  return (
    <div id="task-6">
      <h2>Todo App</h2>
      <div className="search">
        <SearchToDo searchForTodo={searchTodo} />
      </div>
      <AddToDo addTodo={addTodo} />
      <ToDoList list={list} setList={setList} />
    </div>
  );
};

export default Task6;
