import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 200px; /* Adjust the width of the card */
  height: 300px; /* Adjust the height of the card */
  perspective: 1000px; /* Depth of the 3D space */
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const FrontFace = styled(CardFace)`
  background-color: #f0f0f0; /* Adjust background color of the front face */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackFace = styled(CardFace)`
  background-color: #e0e0e0; /* Adjust background color of the back face */
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`;


const CustomApp = () => {
  return (
    <>
    <FlipCard/>
    </>
  )
}

export default CustomApp

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <CardContainer>
        <Card onClick={handleClick}>
          <FrontFace>
            <h2>Front Side</h2>
          </FrontFace>
          <BackFace>
            <h2>Back Side</h2>
          </BackFace>
        </Card>
      </CardContainer>
    );
  };
  