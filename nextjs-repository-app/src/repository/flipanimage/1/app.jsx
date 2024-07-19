import React, { useState } from "react";
import styled from "styled-components";

// Styled component for the container div
const ImageContainer = styled.div`
  display: inline-block;
  perspective: 1000px; /* Depth of the 3D space */
`;

// Styled component for the image
const FlippableImage = styled.img`
  width: 200px; /* Adjust the width of the image */
  height: 200px; /* Adjust the height of the image */
  transition: transform 0.5s; /* Add transition for smooth flipping */

  /* Apply transform for flipping based on the state */
  transform-style: preserve-3d;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "none")};
`;

const CustomApp = () => {
  return (
    <>
    <FlippableImageComponent/>
    </>
  )
};

export default CustomApp;

const FlippableImageComponent = () => {
  const [flipped, setFlipped] = useState(false); // State to track whether the image is flipped

  // Function to toggle the flipped state
  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <ImageContainer onClick={toggleFlip}>
        <FlippableImage
          src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Image"
          flipped={flipped}
        />
      </ImageContainer>
    </>
  );
};
