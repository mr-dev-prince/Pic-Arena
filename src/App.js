import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Home from "./components/Home";
import Community from "./components/Community";
import Creators from "./components/Creators";
import Collections from "./components/Collections";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./auth/Profile";
import { useContext, useEffect } from "react";
import { appwriteContext } from "./context/AppwriteContext";
import { userContext } from "./context/UserContext";

function App() {
  const { appwrite, setIsLoggedIn } = useContext(appwriteContext);
  const { setUser } = useContext(userContext);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await appwrite.getCurrentUser();
        if (user) {
          setUser(user);
          setIsLoggedIn(true);
          console.log("User fetched:", user);
        }
      } catch (error) {
        console.log("No active session found:", error?.message);
      }
    };

    checkSession();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;