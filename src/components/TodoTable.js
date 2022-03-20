import React from "react";
import "../App.css";

export default function TodoTable(props) {
  return (
    <div className="App">
      <table>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
