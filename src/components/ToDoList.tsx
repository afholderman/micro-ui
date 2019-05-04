import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllToDos, toggleToDo, ToDoState } from "./ToDo/store";
import { ToDo } from "./ToDo/ToDo";

export const ToDoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: ToDoState = useSelector(selectAllToDos);
  return (
    <ul>
      ToDos
      {todos.map(todo => (
        <ToDo
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleToDo(todo.id))}
        />
      ))}
    </ul>
  );
};
