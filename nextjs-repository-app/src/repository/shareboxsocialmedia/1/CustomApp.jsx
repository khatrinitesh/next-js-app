import React from 'react';
import Example from './Example';

const CustomApp = () => {

    const url = 'https://example.com';
  const title = 'Check out this awesome website!';

  return (
    <>
     <h1>Share Box Example</h1>
     <Example url={url} title={title}/>
    </>
  )
}

export default CustomApp