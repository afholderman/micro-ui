import React from "react";
import { Col } from "antd";
import { NoteList } from "./components/NoteList";
import { AddNote } from "./components/AddNote";
import { ReducerRegistry } from "../../data/reducerRegistry";

interface NoteModuleProps {
  reducerRegistry: ReducerRegistry;
}

export const NoteModule: React.FC = () => (
  <Col sm={{ span: 22 }} md={{ span: 18 }} lg={{ span: 12 }}>
    <NoteList />
    <AddNote />
  </Col>
);
