import { createContext, useReducer } from "react";

export const UserContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return <UserContext.Provider value={}></UserContext.Provider>;
};
