
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"



const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 125%;
    font-family: Arial, Helvetica, sans-serif;
    color: ${p => p.theme.textCol};
    text-shadow: ${p => p.theme.textShadow};

    background-color: ${p => p.theme.bgCol};
  }

  ::placeholder {
    color: ${p => p.theme.textCol};
    text-shadow: ${p => p.theme.textShadow};
    font-size: 0.8rem;
  }

  ::-moz-placeholder { 
    color: hsl(120, 11%, 72%);
    text-shadow: 1px 1px 1px black;
    opacity:  1;
  }

  .hidden {
    display: none;
  }
`;



const darkTheme = {
  navCol: "rgb(40, 40, 46);",
  secondCol: "hsl(240, 6.976744186046512%, 23.862745098039216%);",
  bgCol: "#828286;",
  
  cardCol: "hsl(0, 15.183246073298434%, 37.450980392156865%)",
  textCol: "rgb(238, 238, 238)",
  textShadow: "1px 1px 1px black",
  boxShadowLight: "0px 0px 0px 1px hsl(240, 7%, 30%)",
  buttonBg: "linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%)",
  hideSidebar: "none",
}


function App() {
  return (
    <ThemeProvider theme={ darkTheme } >
      <GlobalStyle />
      <Wrapper > 
      <Header />
      <Main >
        <Sidebar />
      <MainContent />
      </Main>
        
      </Wrapper >
  </ThemeProvider>
  );
}

const Wrapper = styled.div`
 

`

const Main = styled.main`

 
`

export default App;
