import React from 'react';
import styled from "styled-components";
import { ReactComponent as AlarmIcon } from '../assets/images/alram-icon.svg';

function Header(){
    return (
        <header className='header'>
            <div className='headerbar-collaps'>
                <h1>DAMINI</h1>
                <div className='header-item'>
                    <div className='profile'></div>
                    <span>ID(사용자명)</span>
                      <Icon> 
                         <AlarmIcon />
                     </Icon>    
                </div>
            </div>
        </header>
    );
}
const Icon = styled.div``
export default Header;