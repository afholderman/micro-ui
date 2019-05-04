import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "antd";

import { selectAllToDos, toggleToDo, ToDoState, IToDo } from "./ToDo/store";
import { ToDo } from "./ToDo/ToDo";

export const ToDoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: ToDoState = useSelector(selectAllToDos);
  return (
    <List
      dataSource={todos}
      header={<h3>To Do:</h3>}
      bordered
      renderItem={(todo: IToDo) => (
        <ToDo
          key={todo.id}
          {...todo}
          onChange={() => dispatch(toggleToDo(todo.id))}
        />
      )}
    />
  );
};
