import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Home from "./components/Home";
import Community from "./components/Community";
import MarketPlace from "./components/MarketPlace";
import Collections from "./components/Collections";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
