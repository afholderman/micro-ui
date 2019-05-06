import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Row, Col, Form } from "antd";

import { addNote } from "../store";
const { TextArea } = Input;

export const AddNote: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const saveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !text) {
      return;
    }
    dispatch(addNote({ title, text }));
    setTitle("");
    setText("");
  };

  return (
    <Form onSubmit={saveNote}>
      <Row type="flex" justify="space-between">
        <Col span={18}>
          <Input
            value={title}
            placeholder={"Title"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col span={18}>
          <TextArea
            value={text}
            placeholder={"Note"}
            autosize={{ minRows: 3 }}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
          />
        </Col>
      </Row>
      <Row type="flex" justify="start">
        <Col>
          <Button type="primary" htmlType="button" onClick={saveNote}>
            Add Note
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
