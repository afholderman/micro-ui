import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "antd";

import { selectAllToDos, toggleToDo, ToDoState, IToDo } from "../store";
import { ToDoItem } from "./ToDoItem";

export const ToDoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: ToDoState = useSelector(selectAllToDos);
  return (
    <List
      dataSource={todos}
      header={<h3>To Do:</h3>}
      bordered
      renderItem={(todo: IToDo) => (
        <ToDoItem
          key={todo.id}
          {...todo}
          onChange={() => dispatch(toggleToDo(todo.id))}
        />
      )}
    />
  );
};
