import React from "react";
import "./App.css";
import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <AddToDo />
      <ToDoList />
    </div>
  );
};

export default App;
