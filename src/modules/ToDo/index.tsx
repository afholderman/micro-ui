import React from "react";
import { Col } from "antd";
import { ToDoList } from "./components/ToDoList";
import { AddToDo } from "./components/AddToDo";

const ToDoModule: React.FC = () => (
  <Col sm={{ span: 22 }} md={{ span: 18 }} lg={{ span: 12 }}>
    <ToDoList />
    <AddToDo />
  </Col>
);

export default ToDoModule;
