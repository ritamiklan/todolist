import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Userinput from "./components/Userinput";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<Userinput />} />
      </Routes>
    </div>
  );
}

export default App;
