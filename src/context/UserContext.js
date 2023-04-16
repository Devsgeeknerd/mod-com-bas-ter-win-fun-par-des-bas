import { createContext, useReducer } from "react";

export const UserContext = createContext();

export default({children}) => {const[state, dispatch]=useReducer(UserReducer); return();}
