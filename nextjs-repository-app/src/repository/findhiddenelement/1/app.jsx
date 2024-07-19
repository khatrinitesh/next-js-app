import React, { useState } from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HiddenElement = styled.div`
  display:${props => props.visible ? 'block' : 'none'}
`;


const Button = styled.button`
  margin-top: 10px;
  background-color: orange;
  display: inline-block;
  border-radius: 3px;
  padding: 5px 10px;
`;
const CustomApp = () => {

    const [isVisible,setIsVisible] = useState(false);

    const toggleVisiblility = () => {
        setIsVisible(!isVisible)
    }
    
  return (
    <>
      <Container>
        <Button onClick={toggleVisiblility}>Toggle Visibility</Button>
        <HiddenElement visible={isVisible}>
            This is a hidden element!
        </HiddenElement>
      </Container>
    </>
  )
}

export default CustomApp
