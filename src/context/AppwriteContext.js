import { createContext, useState } from "react";
import AppwriteServices from "../appwrite/services";

export const appwriteContext = createContext({
  appwrite: new AppwriteServices(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AppwriteProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultValue = {
    appwrite: new AppwriteServices(),
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <appwriteContext.Provider value={defaultValue}>
      {children}
    </appwriteContext.Provider>
  );
};