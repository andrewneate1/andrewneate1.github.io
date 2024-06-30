import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import "./ToDo.css";

const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="card shadow border-1 rounded-4 m-3 mt-0">
      <div className="card-body p-3">
        <h4
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </h4>
        <div className="align-items-center inline">
          <IoTrashBinSharp size="30px" onClick={() => deleteTodo(task.id)} />
          <FaEdit size="30px" onClick={() => editTodo(task.id)} />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
