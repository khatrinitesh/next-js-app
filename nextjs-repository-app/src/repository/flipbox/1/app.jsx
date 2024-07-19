import React, { useState } from 'react';
import styled from 'styled-components';


// Styled component for the container of the flip box
const FlipBoxContainer = styled.div`
  perspective: 1000px; /* Depth of the 3D space */
`;

// Styled component for the flip box
const FlipBox = styled.div`
  width: 200px; /* Adjust the width of the flip box */
  height: 200px; /* Adjust the height of the flip box */
  position: relative;
  transition: transform 0.5s; /* Add transition for smooth flipping */
  transform-style: preserve-3d;
  cursor: pointer;

  /* Apply flipping effect based on the state */
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'none'};
`;

// Styled component for the front and back sides of the flip box
const FlipBoxSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

// Styled component for the front side of the flip box
const FlipBoxFront = styled(FlipBoxSide)`
  background-color: #f0f0f0; /* Adjust background color of the front side */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the back side of the flip box
const FlipBoxBack = styled(FlipBoxSide)`
  background-color: #e0e0e0; /* Adjust background color of the back side */
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
`;

const CustomApp = () => {
  return (
    <>
        <FlipBoxComponent/>
    </>
  )
}

export default CustomApp

const FlipBoxComponent = () => {
    const [flipped, setFlipped] = useState(false); // State to track whether the flip box is flipped
  
    // Function to toggle the flipped state
    const toggleFlip = () => {
      setFlipped(!flipped);
    };
  
    return (
      <FlipBoxContainer>
        <FlipBox flipped={flipped} onClick={toggleFlip}>
          <FlipBoxFront>
            Front Side
          </FlipBoxFront>
          <FlipBoxBack>
            Back Side
          </FlipBoxBack>
        </FlipBox>
      </FlipBoxContainer>
    );
  };