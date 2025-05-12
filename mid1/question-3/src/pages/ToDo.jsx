import React, { useState } from "react";
import "./ToDo.css"; 

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const markTaskAsDone = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span className="task-text">{task.text}</span>
            <div className="task-buttons">
              <button
                onClick={() => markTaskAsDone(index)}
                className="done-button"
                disabled={task.completed}
              >
                Done
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
