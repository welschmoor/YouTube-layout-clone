
import React from "react"
import styled from "styled-components"

import {Hamburger, LogoWrapper, Logo} from "./Header"
import { IconFavorites, IconHome} from "./Sidebar"

const MobileSidebar = ( {sideBarOpen, hamburgerClick} ) => {
  console.log(sideBarOpen)


  return( 
  <MobileWrapper style={{ "left": sideBarOpen? "0" : "-100%" }}>
    <LogoWrapper>
      <Hamburger onClick={hamburgerClick} />
      <Logo>YouTube</Logo>
    </LogoWrapper>

    <nav style={{ "margin-top": 80 }}>
      <UL>
      <LI> <IconHome /> <IconTitle>Home</IconTitle></LI>
      <li><IconFavorites/></li>
      <li>3</li>
      <li>4</li>
      </UL>
    </nav>
  </MobileWrapper>
  )
}

const MobileWrapper = styled.aside`
  padding-top: 17px;
  z-index: 6;
  position: absolute;
  background-color: ${p=>p.theme.navCol};
  width: 240px;
  top: 0;
  left: 0;
  transition: 0.3s;
  height: 100vh;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.336);
`

const MobilePlane = styled.div`
display:fixed;
  width: 100vh;
  height: 100vh;
  transform: translate(-50%, -50%);
  background-color: black;
`

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: center;
  list-style: none;
`
const LI = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`

const IconTitle = styled.h3`
  font-size: 1rem;
`
export default MobileSidebar 