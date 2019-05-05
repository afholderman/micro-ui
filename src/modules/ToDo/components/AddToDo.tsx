import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Row, Col, Form } from "antd";

import { addToDo } from "../store";

export const AddToDo: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const saveToDo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    dispatch(addToDo(value));
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Form onSubmit={saveToDo}>
      <Row type="flex" justify="space-between">
        <Col span={18}>
          <Input type="text" {...{ value, onChange }} />
        </Col>
        <Col>
          <Button type="primary" htmlType="button" onClick={saveToDo}>
            Add ToDo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
