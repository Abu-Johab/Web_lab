import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Render the HomePage component at the root path */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
