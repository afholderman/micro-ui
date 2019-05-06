import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "antd";

import { selectAllNotes, toggleNote, NoteState, INote } from "../store";
import { NoteItem } from "./NoteItem";

export const NoteList: React.FC = () => {
  const dispatch = useDispatch();
  const notes: NoteState = useSelector(selectAllNotes);
  return (
    <List
      dataSource={notes}
      header={<h3>Notes:</h3>}
      bordered
      renderItem={(note: INote) => (
        <NoteItem
          key={note.id}
          {...note}
          deleteNote={() => dispatch(toggleNote(note.id))}
        />
      )}
    />
  );
};
