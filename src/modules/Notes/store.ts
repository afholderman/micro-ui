import { reducerRegistry, createActionName } from "../../data/reducerRegistry";

export interface INote {
  id: number;
  text: string;
  title: string;
  completed: boolean;
}

export type NoteState = INote[];

const initialState: NoteState = [];
const reducerName = "note";
let nextNoteId = 0;

export const ADD_NOTE = createActionName(reducerName, "ADD_NOTE");
export const DELETE_NOTE = createActionName(reducerName, "DELETE_NOTE");

type AddNoteAction = {
  type: string;
  id: number;
  title: string;
  text: string;
};

export const addNote = ({
  title,
  text
}: {
  title: string;
  text: string;
}): AddNoteAction => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  title,
  text
});

type ToggleNoteAction = {
  type: string;
  id: number;
};

export const toggleNote = (id: number): ToggleNoteAction => ({
  type: DELETE_NOTE,
  id
});

const reducer = (
  state = initialState,
  action: AddNoteAction | ToggleNoteAction
) => {
  switch (action.type) {
    case ADD_NOTE:
      const { id, title, text } = action as AddNoteAction;
      return [
        ...state,
        {
          id,
          title,
          text,
          completed: false
        }
      ];
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};

reducerRegistry.register(reducerName, reducer);

export const selectAllNotes = (state: any): NoteState => state[reducerName];
