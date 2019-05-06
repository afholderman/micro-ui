import React from "react";
import { Col } from "antd";
import { ToDoList } from "./components/ToDoList";
import { AddToDo } from "./components/AddToDo";
import { ReducerRegistry } from "../../data/reducerRegistry";

interface ToDoModuleProps {
  reducerRegistry: ReducerRegistry;
}

export const ToDoModule: React.FC = () => (
  <Col sm={{ span: 22 }} md={{ span: 18 }} lg={{ span: 12 }}>
    <ToDoList />
    <AddToDo />
  </Col>
);
