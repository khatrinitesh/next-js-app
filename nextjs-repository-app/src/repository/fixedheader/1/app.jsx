import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  z-index: 999; /* Ensure it's above other content */
`;

const Content = styled.div`
  margin-top: 50px; /* Adjust for the height of the fixed header */
`;

const CustomApp = () => {
  return (
    <>
      <Header>Fixed Header</Header>
      <Content>
        {/* Your content goes here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
      </Content>
    </>
  );
};

export default CustomApp;
