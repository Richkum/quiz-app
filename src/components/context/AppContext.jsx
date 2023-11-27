import React from "react";
import { createContext, useReducer } from "react";

const initialVal = {
  question: [],
  currentQuestion: "1",
  answer: [],
};

export const AppContext = createContext();
export const AppProvider = {};
