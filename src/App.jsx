import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./main/Main";
import LogIn from "./main/LogIn";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LogIn />} /> 
      <Route path="/login" element={<LogIn />} />
      <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
