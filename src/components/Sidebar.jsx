import React, { useState } from "react";

import {
  Nav,
  NavContainer,
  NavList,
  NavItem,
  NavLink,
  SubMenu,
  Icon,
  ArrowIcon,
  NavFold,
  NavOpen,
  NavProfileIcon,
  Navitemtext,
  NavIcon,
  StyledLi
} from "./common.styles"; 
import { ReactComponent as NavProfile } from "../assets/images/navProfile.svg";
import { ReactComponent as Admin } from "../assets/images/admin.svg";
import { ReactComponent as Arrowdown } from "../assets/images/arrow-down.svg";
import { ReactComponent as Arrowup } from "../assets/images/arrow-up.svg";
import { ReactComponent as OpenBtn } from "../assets/images/openBtn.svg";
import { ReactComponent as FoldBtn } from "../assets/images/foldBtn.svg";
import { ReactComponent as Permidentity } from "../assets/images/perm-identity.svg";
import { ReactComponent as NavilogDictionary } from "../assets/images/Navilog_Dictionarysvg.svg";
import { ReactComponent as Dashboard } from "../assets/images/dashboard.svg";

function Sidebar({ isOpen, toggleSidebar }) {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index); 
  };
  const handleSubMenuToggle = (menu) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  

  return (
    <Nav className={isOpen ? "open" : "closed"}>
      <NavContainer>
        {!isOpen &&  (
        <NavFold>
          <NavList className="navlist">
            <NavItem>
              <Icon>
                <Dashboard />
              </Icon>
            </NavItem>
            <NavItem>
              <Icon>
                <NavilogDictionary />
              </Icon>
            </NavItem>
            <NavItem>
              <Icon>
                <Permidentity />
              </Icon>
            </NavItem>
            <NavItem>
              <Icon>
                <Admin />
              </Icon>
            </NavItem>
          </NavList>
          <NavIcon className="NavIcon">
          <NavProfileIcon>
            <NavProfile />
          </NavProfileIcon>
          <button onClick={toggleSidebar}>
            <Icon>
              <OpenBtn />
            </Icon>
          </button>
          </NavIcon>
        </NavFold>)}
        {isOpen  &&  (
        <NavOpen>
          <NavList>
            <NavItem>
              <NavLink to="">
                <Icon>
                  <Dashboard />
                </Icon>
                <Navitemtext>Dashboard</Navitemtext>
              </NavLink>
              <ul>
                <li>Dashboard</li>
              </ul>
            </NavItem>
            <NavItem>
              <NavLink to="">
                <Icon>
                  <NavilogDictionary />
                </Icon>
                <Navitemtext>Navilog Dictionary</Navitemtext>
              </NavLink>
              <ul>
                <li>
                  <div onClick={() => handleSubMenuToggle("navilog")}>
                    <div>Navilog 3.0 규격</div>
                    <ArrowIcon>
                      {openSubMenus["navilog"] ? <Arrowup /> : <Arrowdown />}
                    </ArrowIcon>
                  </div>
                  <SubMenu isOpen={openSubMenus["navilog"]}>
                      <StyledLi
        isActive={activeIndex === 0}
        onClick={() => handleClick(0)} 
      >송출 데이터 규격</StyledLi>
                    <StyledLi isActive={activeIndex === 1}
        onClick={() => handleClick(1)} >적재 데이터 규격</StyledLi>
                    <StyledLi   isActive={activeIndex === 2}
        onClick={() => handleClick(2)} >Component 등록 현황</StyledLi>
                  </SubMenu>
                </li>
                <li>
                  <div onClick={() => handleSubMenuToggle("navilog2")}>
                    <div>표준 정책 가이드</div>
                    <ArrowIcon>
                      {openSubMenus["navilog2"] ? <Arrowup /> : <Arrowdown />}
                    </ArrowIcon>
                  </div>
                  <SubMenu isOpen={openSubMenus["navilog2"]}>
                    <StyledLi isActive={activeIndex === 4}
                          onClick={() => handleClick(4)}>개발 
                          표준 정책</StyledLi>
                    <StyledLi isActive={activeIndex === 5}
        onClick={() => handleClick(5)}>Component 작성 정책</StyledLi>
                  </SubMenu>
                </li>
              </ul>
            </NavItem>
            <NavItem>
              <NavLink to="">
                <Icon>
                  <Permidentity />
                </Icon>
                <Navitemtext>My Page</Navitemtext>
              </NavLink>
              <ul>
                <li>신청 리스트 조회</li>
                <li>신청 리스트 조회</li>
              </ul>
            </NavItem>
            <NavItem>
              <NavLink to="">
                <Icon>
                  <Admin />
                </Icon>
                <Navitemtext>Admin</Navitemtext>
              </NavLink>
              <ul>
                <li>관리자 권한 관리</li>
                <li>신청 리스트 조회</li>
                <li>사용자 접속 이력</li>
                <li>공통 코드 조회</li>
              </ul>

            </NavItem>
          </NavList>
          <NavIcon className="NavIcon">
            <NavProfileIcon>
              <NavProfile />
            </NavProfileIcon>
            <span>로그아웃</span>
            <button className="HamburgerButton" onClick={toggleSidebar}>
              <Icon>
                <FoldBtn />
              </Icon>
            </button>
          </NavIcon>
        </NavOpen>)}
      </NavContainer>
    </Nav>
  );
}

export default Sidebar;
// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { ReactComponent as NavProfile } from "../assets/images/navProfile.svg";
// import { ReactComponent as Admin } from "../assets/images/admin.svg";
// import { ReactComponent as Arrowdown } from "../assets/images/arrow-down.svg";
// import { ReactComponent as Arrowup } from "../assets/images/arrow-up.svg";
// import { ReactComponent as OpenBtn } from "../assets/images/openBtn.svg";
// import { ReactComponent as FoldBtn } from "../assets/images/foldBtn.svg";
// import { ReactComponent as Permidentity } from "../assets/images/perm-identity.svg";
// import { ReactComponent as NavilogDictionary } from "../assets/images/Navilog_Dictionarysvg.svg";
// import { ReactComponent as Dashboard } from "../assets/images/dashboard.svg";

// function Sidebar({ isOpen, toggleSidebar }) {
//   const [openSubMenus, setOpenSubMenus] = useState({});
//   // const [activeId, setActiveId] = useState(null);

//   const handleSubMenuToggle = (menu) => {
//     setOpenSubMenus((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };
//   const StyledLink = styled(Link)`
//     color: inherit;
//     text-decoration: none;
//   `;
//   // const values = [
//   //   { id: 1, text: "LI-1" },
//   //   { id: 2, text: "Navilog Dictionary" },
//   //   { id: 3, text: "My Page" },
//   //   { id: 4, text: "Admin" },
//   // ];
//   // const handleClick = (id) => {
//   //   setActiveId(id);
//   // };

//   return (
//     <nav className={`nav ${isOpen ? "open" : "closed"}`}>
//       <div className="nav_container">
//         <div className="nav_fold">
//           <ul className="nav_fold_list">
//             <li>
//               <Icon>
//                 <Dashboard />
//               </Icon>
//             </li>
//             <li>
//               <Icon>
//                 <NavilogDictionary />
//               </Icon>
//             </li>
//             <li>
//               <Icon>
//                 <Permidentity />
//               </Icon>
//             </li>
//             <li>
//               <Icon>
//                 <Admin />
//               </Icon>
//             </li>
//           </ul>
//           <div className="nav-icon">
//             <Icon className="nav-profile">
//               <NavProfile />
//             </Icon>
//             <button onClick={toggleSidebar} className="hamburger">
//               <Icon>
//                 <OpenBtn />
//               </Icon>
//             </button>
//           </div>
//         </div>
//         <div className="nav_open">
//           <ul className="nav_open_list">
//             <li className="nav_item active">
//               <StyledLink to="" className="nav_link">
//                 <Icon>
//                   <Dashboard />
//                 </Icon>
//                 <div className="nav_item_text">Dashboard</div>
//               </StyledLink>
//               <ul>
//                 <li>Dashboard</li>
//               </ul>
//             </li>
//             <li className="nav_item">
//               <StyledLink to="" className="nav_link">
//                 <Icon>
//                   <NavilogDictionary />
//                 </Icon>
//                 <div className="nav_item_text">Navilog Dictionary</div>
//               </StyledLink>
//               <ul>
//                 <li>
//                   <div onClick={() => handleSubMenuToggle("navilog")}>
//                     <div>Navilog 3.0 규격</div>
//                     <Icon className="arrowup">
//                       {openSubMenus["navilog"] ? <Arrowup /> : <Arrowdown />}
//                     </Icon>
//                   </div>
//                   <SubMenu isOpen={openSubMenus["navilog"]}>
//                     <li>송출 데이터 규격</li>
//                     <li>적재 데이터 규격</li>
//                     <li>Component 등록 현황</li>
//                   </SubMenu>
//                 </li>
//                 <li>
//                   <div onClick={() => handleSubMenuToggle("navilog2")}>
//                     <div>표준 정책 가이드</div>
//                     <Icon className="arrowup">
//                       {openSubMenus["navilog2"] ? <Arrowup /> : <Arrowdown />}
//                     </Icon>
//                   </div>

//                   <SubMenu isOpen={openSubMenus["navilog2"]}>
//                     <li>개발 표준 정책</li>
//                     <li>Component 작성 정책</li>
//                   </SubMenu>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav_item">
//               <StyledLink to="" className="nav_link">
//                 <Icon>
//                   <Permidentity />
//                 </Icon>
//                 <div className="nav_item_text">My Page</div>
//               </StyledLink>
//               <ul>
//                 <li>신청 리스트 조회</li>
//                 <li>신청 리스트 조회</li>
//               </ul>
//             </li>
//             <li className="nav_item">
//               <StyledLink to="" className="nav_link">
//                 <Icon>
//                   <Admin />
//                 </Icon>
//                 <div className="nav_item_text">Admin</div>
//               </StyledLink>
//               <ul>
//                 <li>관리자 권한 관리</li>
//                 <li>신청 리스트 조회</li>
//                 <li>사용자 접속 이력</li>
//                 <li>공통 코드 조회</li>
//               </ul>
//             </li>
//           </ul>

//           <div className="nav-icon">
//             <Icon className="nav-profile">
//               <NavProfile />
//             </Icon>
//             <span>로그아웃</span>
//             <button onClick={toggleSidebar} className="hamburger">
//               <Icon>
//                 <FoldBtn />
//               </Icon>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// const SubMenu = styled.div`
//   max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
//   overflow: hidden;
//   transition: max-height 0.3s ease, opacity 0.3s ease;
//   opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
//   display: grid;
//   gap: 4px;
//   padding-left: 8px;
//   margin-top: 10px;
//   color: #6C7383;
// `;
// const Icon = styled.div``;

// export default Sidebar;
