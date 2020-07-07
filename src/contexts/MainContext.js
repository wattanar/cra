import React, { createContext, useReducer } from "react";
import {
  counterReducer,
  counterState,
} from "../reducers/counter/counterReducer";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const counter = useReducer(counterReducer, counterState);

  return (
    <MainContext.Provider value={{ counter }}>{children}</MainContext.Provider>
  );
};
