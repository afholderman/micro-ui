import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./ToDo/store";

export const AddToDo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef!.current!.value.trim()) {
      return;
    }
    dispatch(addToDo(inputRef!.current!.value));
    inputRef!.current!.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
};
