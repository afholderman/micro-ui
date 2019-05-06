import React from "react";
import { List, Card } from "antd";
const ListItem = List.Item;

interface NoteProps {
  deleteNote: () => void;
  completed: boolean;
  text: string;
  title: string;
}

export const NoteItem: React.SFC<NoteProps> = ({ deleteNote, title, text }) => (
  <ListItem>
    <Card
      {...{ title }}
      style={{ minWidth: 300 }}
      extra={
        <a onClick={() => deleteNote()} href="#">
          Delete
        </a>
      }
      bordered
    >
      {text}
    </Card>
  </ListItem>
);
