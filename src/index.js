import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppwriteProvider } from "./context/AppwriteContext";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppwriteProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </AppwriteProvider>
);
