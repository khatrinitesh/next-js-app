import React, { useState } from 'react';
import styled from 'styled-components';

const FlipBookContainer = styled.div`
  width: 300px; /* Adjust the width of the flipbook */
  height: 200px; /* Adjust the height of the flipbook */
  perspective: 1000px; /* Depth of the 3D space */
  position: relative;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.5s;
  transform-style: preserve-3d;
`;

const FrontPage = styled(Page)`
  background-color: #f0f0f0; /* Adjust background color of the front page */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackPage = styled(Page)`
  background-color: #e0e0e0; /* Adjust background color of the back page */
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`;



const CustomApp = () => {
  return (
    <>
    <FlipBook/>
    </>
  )
}

export default CustomApp

const FlipBook = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleClick = () => {
      setCurrentPage(currentPage === 1 ? 2 : 1);
    };
  
    return (
      <FlipBookContainer onClick={handleClick}>
        <FrontPage style={{ transform: `rotateY(${currentPage === 1 ? '0' : '180'}deg)` }}>
          <h2>Page 1</h2>
        </FrontPage>
        <BackPage style={{ transform: `rotateY(${currentPage === 1 ? '180' : '0'}deg)` }}>
          <h2>Page 2</h2>
        </BackPage>
      </FlipBookContainer>
    );
  };