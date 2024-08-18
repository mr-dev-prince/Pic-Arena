import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  user: null,
  setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const defaultValue = {
    user,
    setUser,
  };

  return (
    <userContext.Provider value={defaultValue}>{children}</userContext.Provider>
  );
};
