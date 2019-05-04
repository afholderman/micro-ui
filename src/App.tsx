import React from "react";
import { Row, Col } from "antd";

import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";
import "antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <Row type="flex" justify="center" className="App">
      <Col sm={{ span: 22 }} md={{ span: 18 }} lg={{ span: 12 }}>
        <ToDoList />
        <AddToDo />
      </Col>
    </Row>
  );
};

export default App;
