import React from "react";
import styled from "styled-components";

// Define a styled component for the flex container
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Align items with space between */
  align-items: center; /* Center items vertically */
  height: 100vh; /* Set full viewport height */
  padding: 0 20px; /* Add some padding */
`;

// Define a styled component for the flex items
const FlexItem = styled.div`
  flex: 1; /* Each item takes up equal space */
  max-width: 30%; /* Set maximum width for each item */
  padding: 20px; /* Add some padding */
  border: 1px solid #ccc; /* Add border for visualization */
  border-radius: 5px; /* Add border radius for visualization */
`;

const CustomApp = () => {
  return (
    <>
    <div className="container mx-auto">
      <FlexContainer>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </FlexContainer>
      </div>
    </>
  );
};

export default CustomApp;
