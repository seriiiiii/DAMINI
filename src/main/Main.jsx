<<<<<<< HEAD:src/main/Main.jsx
import React,{useState} from 'react';
import '../assets/css/styles.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Container from './Container';
import {
MainContainer
} from "../components/common.styles";
=======
import React, { useState } from "react";
import "../assets/css/styles.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "./Container";
>>>>>>> 839baac6355aeffd545a020164c6e831c6fc3367:src/main/Main.js

function Main() {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD:src/main/Main.jsx
    const toggleSidebar = () => {
      setIsOpen(!isOpen); 
    };
    return(
        <div>
        <Header />
        <MainContainer>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Container isOpen={isOpen}  />
        </MainContainer> 
      </div>
    );
};
export default Main;
=======
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Header />
      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Container isOpen={isOpen} />
      </main>
    </div>
  );
}
export default Main;
>>>>>>> 839baac6355aeffd545a020164c6e831c6fc3367:src/main/Main.js
