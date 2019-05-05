import React from "react";
import { List, Checkbox } from "antd";
const ListItem = List.Item;

interface ToDoProps {
  onChange: (e: any) => void;
  completed: boolean;
  text: string;
}

export const ToDoItem: React.SFC<ToDoProps> = ({
  onChange,
  completed,
  text
}) => (
  <ListItem>
    <Checkbox checked={completed} {...{ onChange }}>
      {text}
    </Checkbox>
  </ListItem>
);
