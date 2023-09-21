import React, { useState, useEffect } from "react";

// import './App.css';
import "./TodoApp.css";
import { useTranslation } from "react-i18next";

const TodoApp = () => {
  const { t } = useTranslation();

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [currentTask, setCurrentTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (currentTask.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: currentTask,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const taskActive = tasks.filter((item) => item.completed === false);

  const filterTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="container">
      <div className="header">
        {t("You have") + ` ${taskActive.length} ` + t("tasks left!")}
      </div>

      <div className="tasks-container mt-3">
        <ul>
          {filterTasks().map((task) => (
            <li className="border-bottom text-capitalize" key={task.id}>
              <input
                type="radio"
                checked={task.completed}
                onClick={() => completeTask(task.id)}
              />
              <span className={`${task.completed ? "completed_task" : ""}`}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}>{t("Delete")}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="input-container">
        <input
          className="form-control"
          type="text"
          placeholder={t("Enter task ...")}
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button className="btn btn-outline-success" onClick={addTask}>
          {t("Submit")}
        </button>
      </div>

      <div className="filter-container">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          {t("All")}
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          {t("Active")}
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          {t("Completed")}
        </button>
      </div>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        onClick={() => setTasks([])}
      >
        <button className="btn btn-danger me-md-2"> {t("Delete All")}</button>
      </div>
    </div>
  );
};

export default TodoApp;
