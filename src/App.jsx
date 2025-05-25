import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Register from "./Pages/Register";
import Movies from "./Pages/Movies";
import Browse from "./Pages/Browse";
import Display from "./Pages/Display";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
