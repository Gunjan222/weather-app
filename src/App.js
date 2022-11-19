import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WeatherHourly from "./pages/WeatherHourly";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hour" element={<WeatherHourly />} />
      </Routes>
    </Router>
  );
}

export default App;
