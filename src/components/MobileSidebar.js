
import React from "react"
import styled from "styled-components"

let outsideVar;
const MobileSidebar = ( {sideBarOpen} ) => {
  console.log(sideBarOpen)
  outsideVar = sideBarOpen
  return(
   
    <MobileWrapper style={{ "left": sideBarOpen? "0" : "-100%" }}>
    <nav>
      <UL>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      </UL>
    </nav>
    </MobileWrapper>
  
    
  )
}

const MobileWrapper = styled.aside`
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
  align-items: center;
`

export default MobileSidebar 