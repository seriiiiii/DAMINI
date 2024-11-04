import React,{useState} from 'react';
import '../assets/css/styles.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Container from './Container';
import {
MainContainer
} from "../components/common.styles";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

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
