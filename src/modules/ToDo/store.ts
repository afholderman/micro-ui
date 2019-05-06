import { reducerRegistry, createActionName } from "../../data/reducerRegistry";

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

export type ToDoState = IToDo[];

const initialState: ToDoState = [];
const reducerName = "todo";
let nextToDoId = 0;

export const ADD_TODO = createActionName(reducerName, "ADD_TODO");
export const TOGGLE_TODO = createActionName(reducerName, "TOGGLE_TODO");

type AddToDoAction = {
  type: string;
  id: number;
  text: string;
};

export const addToDo = (text: string): AddToDoAction => ({
  type: ADD_TODO,
  id: nextToDoId++,
  text
});

type ToggleToDoAction = {
  type: string;
  id: number;
};

export const toggleToDo = (id: number): ToggleToDoAction => ({
  type: TOGGLE_TODO,
  id
});

const reducer = (
  state = initialState,
  action: AddToDoAction | ToggleToDoAction
) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, text } = action as AddToDoAction;
      return [
        ...state,
        {
          id,
          text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

reducerRegistry.register(reducerName, reducer);

export const selectAllToDos = (state: any): ToDoState => state[reducerName];
