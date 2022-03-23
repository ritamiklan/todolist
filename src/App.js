import React, { useState, useRef } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
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

  const deleteTodo = (row) => {
    setTodos(
      todos.filter(
        (todo, index) =>
          index !== gridRef.current.getSelectedNodes()[0].childIndex
      )
    );
  };

  return (
    <div className="App">
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
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      <TodoTable todos={todos} row_ref={gridRef} />
    </div>
  );
}

export default App;
