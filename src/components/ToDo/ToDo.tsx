import React from "react";

interface ToDoProps {
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  completed: boolean;
  text: string;
}

export const ToDo: React.SFC<ToDoProps> = ({ onClick, completed, text }) => (
  <li {...{ onClick }}>{text}</li>
);
