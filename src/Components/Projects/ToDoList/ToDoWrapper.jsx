import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";

import "./ToDo.css";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";

const projectLinks = [
  { text: "Currency Converter", link: "/projects/currencyConverter" },
  { text: "Markdown Editor", link: "/projects/markdownEditor" },
  { text: "ToDo List", link: "/projects/toDoList" },
];

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <Navbar links={projectLinks} type="secondary" />
      <div className="card align-items-center shadow container px-5 my-5">
        <div className="card-body">
          <div className="display-3 fw-bolder mb-3">
            <h1 className="text-gradient d-inline">ToDo List</h1>
          </div>
          <ToDoForm addTodo={addTodo} />
          <div
            className="d-flex align-itmes-center justify-content-center"
            style={{ flexWrap: "wrap" }}
          >
            {todos.map((todo, index) => {
              return todo.isEditing ? (
                <EditToDoForm editTodo={editTask} task={todo} />
              ) : (
                <ToDo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoWrapper;
