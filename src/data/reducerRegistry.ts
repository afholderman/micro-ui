import { Reducer } from "react";

export interface Reducers {
  [key: string]: Reducer<any, any>;
}

export class ReducerRegistry {
  _emitChange: null | Function;
  _reducers: Reducers;
  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers(): Reducers {
    return { ...this._reducers };
  }

  register(name: string, reducer: Reducer<any, any>) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: Function) {
    this._emitChange = listener;
  }
}

export function createActionName(reducerName: string, name: string): string {
  return `app/${reducerName}/${name}`;
}

export const reducerRegistry = new ReducerRegistry();
