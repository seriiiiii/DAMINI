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


  export {MainContainer,HeaderWrapper, HeaderbarCollapse, HeaderItem, Profile, PagenationWrapper, CustomSelect, PageInputArea, StyledLink};