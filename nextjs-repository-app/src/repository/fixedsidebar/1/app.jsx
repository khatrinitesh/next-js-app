import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #333;
  padding: 20px;
`;

const SidebarItem = styled.a`
  display: block;
  color: white;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PageContent = styled.div`
  margin-left: 220px; /* Adjusted to account for the sidebar width and some spacing */
  padding: 20px;
`;

const CustomApp = () => {
  return (
    <>
       <Sidebar>
        <SidebarItem href="#">Home</SidebarItem>
        <SidebarItem href="#">About</SidebarItem>
        <SidebarItem href="#">Services</SidebarItem>
        <SidebarItem href="#">Contact</SidebarItem>
      </Sidebar>
      <PageContent>
        {/* Your main content goes here */}
        <h1>Welcome to My Website</h1>
        <p>This is the main content area.</p>
      </PageContent>
    </>
  )
}

export default CustomApp
