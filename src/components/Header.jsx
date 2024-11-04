<<<<<<< HEAD
import React from 'react';
import styled from "styled-components";
import { ReactComponent as AlarmIcon } from '../assets/images/alram-icon.svg';
import {
    HeaderWrapper,
    HeaderbarCollapse,
    HeaderItem,
    Profile,
  } from "./common.styles";
  

function Header(){
    return (
        <HeaderWrapper>
            <HeaderbarCollapse>
                <h1>DAMINI</h1>
                <HeaderItem>
                    <Profile></Profile>
                    <span>ID(사용자명)</span>
                      <Icon> 
                         <AlarmIcon />
                     </Icon>    
                </HeaderItem>
            </HeaderbarCollapse>
        </HeaderWrapper>
    );
}
const Icon = styled.div``
export default Header;
=======
import React from "react";
import styled from "styled-components";
import { ReactComponent as AlarmIcon } from "../assets/images/alram-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="headerbar-collaps">
        <h1>DAMINI</h1>
        <div className="header-item">
          <div className="profile"></div>
          <span>ID(사용자명)</span>
          <Icon>
            <AlarmIcon />
          </Icon>
        </div>
      </div>
    </header>
  );
}
const Icon = styled.div``;
export default Header;
>>>>>>> 839baac6355aeffd545a020164c6e831c6fc3367
