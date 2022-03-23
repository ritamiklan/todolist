import React, { useState, useRef } from "react";
import "../App.css";
import TodoTable from "./TodoTable";
import Menu from "./Menu";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

function Userinput() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", priority: "" });
  };

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const deleteTodo = () => {
    setTodos(
      todos.filter(
        (todo, index) =>
          index !== gridRef.current.getSelectedNodes()[0].childIndex
      )
    );
  };

  return (
    <div className="App">
      <Menu />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <input
        type="text"
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        type="text"
        placeholder="Priority"
        name="priority"
        value={todo.priority}
        onChange={inputChanged}
      />
      <Button
        variant="outlined"
        startIcon={<SaveIcon />}
        size="small"
        color="success"
        onClick={addTodo}
      >
        Add
      </Button>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
        color="error"
        onClick={deleteTodo}
      >
        Delete
      </Button>
      <TodoTable todos={todos} row_ref={gridRef} />
    </div>
  );
}

export default Userinput;
