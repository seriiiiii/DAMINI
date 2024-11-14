import styled from "styled-components";
import { Link } from "react-router-dom";


const MainContainer = styled.div`
align-items: stretch;
    display: flex;
    width: 100%;
    height: 100vh;
    padding-top: 70px;`
const HeaderWrapper = styled.div`
  width: 100%;
    position: fixed;
    z-index: 99;
    height: 70px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--none, 0px) 20px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);


`
const HeaderbarCollapse = styled.div`
  display: flex;
    flex-basis: auto;
    align-items: center;
    flex-basis: 100%;
    flex-grow: 1;
    h1{
       font-size: 36px;
    font-weight: 700;
    line-height: normal;
    color: var(--Main-Color, #3617CE);
    padding: 0;
    margin: 0;
    }
`
const HeaderItem = styled.div`
  gap: 10px;
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-basis: auto;
`
const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  width: 265px;
  margin: 0;
  z-index: 20;
  transition: width 0.3s ease, all 0.2s ease-in;
  opacity: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  &.open {
    width: 265px;
  }
  &.closed {
    width: 70px;
  }
`;

const NavContainer = styled.div`
  width: inherit;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: auto;
  transition: all 0.2s ease 0s;
  position: relative;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
`;

const NavList = styled.ul`
     display: grid;
    cursor: pointer;
    gap:28px;
`;

const NavItem = styled.li`

  ul{
    display:grid;
    gap:8px;
    padding:7px 0px 0px 25px;
    li div:first-child{
       display: flex;
    align-items: center;}
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  gap: 10px;
`;


const SubMenu = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  display: grid;
  gap: 4px;
  padding-left: 8px;
  margin-top: 8px;
  color: #6c7383;

`;
const StyledLi = styled.li`
  padding: 8px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#4B49AC" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#6c7383")};
  padding: ${({ isActive }) => (isActive ? "3px 10px" : "0 0")};
  border-radius: ${({ isActive }) => (isActive ? "5px" : "0")};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;

const HamburgerButton = styled.button`

`;

const ArrowIcon = styled(Icon)`
  margin-left: auto;
`;
const Navitemtext = styled.div`
  display: inline;
    color: #3617CE;
    `
const NavFold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
 ul li{
  padding: 15px 28px;
  }
  .NavIcon{
   display: grid;
    place-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: auto;
    margin-bottom: 31px;}
    .navlist{
    gap:0;}
`;
const NavIcon = styled.div`
 
`;
const NavOpen = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .HamburgerButton{
    margin-left:50px;
  }
      & .NavIcon{
      display: flex;
   justify-content: center; 
    align-items: center;
    gap: 10px;
    }
`;

const NavProfileIcon = styled(Icon)`
 
`;

const Profile = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #3617CE;
    `

const PagenationWrapper = styled.div`
  display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    color: #6C7383;
    padding: 13px 12px;
    gap: 20px;
    li:nth-child(1){
     margin-right: auto;
    margin-left: 26px;
    }

`   
const CustomSelect = styled.select`
    border: none;
    border-radius: 8px;
    display: block;
    padding: 0px 28px 0px 10px;
    background: none;
    background-repeat: no-repeat;
    background-position: right 17px center;
    appearance: none;
    background-image: url(../assets/images/arrow-down_pagenation.png);
    background-repeat: no-repeat;
    background-position: right 6px center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    `
const PageInputArea = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 8px;
`
const StyledLink = styled(Link)`
  display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    color: #6C7383;
    


  ${({ disabled }) => disabled && `
   color: #000;
    opacity: 38%;
    cursor: default;
  `}
`;


  export {MainContainer,HeaderWrapper, HeaderbarCollapse, HeaderItem, Profile, PagenationWrapper, StyledLi, CustomSelect, PageInputArea, StyledLink, Nav, NavIcon,  NavContainer, NavList, Navitemtext, NavItem, NavLink, SubMenu, Icon, HamburgerButton, ArrowIcon, NavFold, NavOpen, NavProfileIcon};