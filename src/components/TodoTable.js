import React from "react";
import "../App.css";

export default function TodoTable(props) {
  /* const deleteTodo = (row) => {
    console.log(row);
    setTodos(props.todos.filter((todo, index) => index !== row));
  };
  */

  return (
    <div className="App">
      <table>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button
                  onClick={() => {
                    props.delete(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
