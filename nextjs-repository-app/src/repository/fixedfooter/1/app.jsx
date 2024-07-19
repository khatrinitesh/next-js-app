import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const MainContent = styled.main`
    background-color: #f9f9f9;
    min-height: calc(100vh - 78px);
    padding: 50px 20px;
`

const Header = styled.header`
    background-color: #000;
    color:#fff;
    padding:20px;
`

const CustomApp = () => {
  return (
    <>
      <Header>
        <h1>Header</h1>
      </Header>
      
      <MainContent>
        {/* Main content goes here */}
        Adipisicing irure sint sint eu et ad reprehenderit occaecat est do.
      </MainContent>
      
      <Footer>
        This is the footer
      </Footer>
    </>
  )
};

export default CustomApp;
