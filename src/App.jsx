import React, { useState } from "react";
import Main from "./main/Main";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
