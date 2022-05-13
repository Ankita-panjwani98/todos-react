import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import DisplayTodo from "../DisplayTodo";

function Test() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        let TodosData = response.data;
        setTodos(TodosData);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  console.log("TODOS:", typeof todos);

  return (
    <div className="todo-section">
      <div className="sidebar-todo">Sidebar</div>
      <div className="todos-display">
        {todos.length > 0
          ? todos?.map((item) => {
              return <DisplayTodo itemtitle={item.title} id={item.id} status={item.completed}/>;
            })
          : "NO TODOS TO DISPLAY!"}
      </div>
    </div>
  );
}

export default Test;
