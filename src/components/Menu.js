import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to="/" className="Menu">
        Home
      </Link>
      <Link to="/todolist" className="Menu">
        To Do List
      </Link>
    </div>
  );
}
