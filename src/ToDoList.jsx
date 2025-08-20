import React, { useState } from "react";

const ToDoList = () => {
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTaks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTaks);
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index - 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index - 1],
    ];
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index + 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index + 1],
    ];
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
