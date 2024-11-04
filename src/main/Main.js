import React, { useState } from "react";
import "../assets/css/styles.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "./Container";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

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
