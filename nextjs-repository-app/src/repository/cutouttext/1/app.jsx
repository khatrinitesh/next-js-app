import React, { useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <Header />
      <Article />
    </>
  )
}

export default CustomApp

const Header = () => {
    return (
      <header>
        <h1>AUTUMN</h1>
      </header>
    );
  };
  
  const Article = () => {
    return (
      <article>
        <p><b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit. Sed ultrices justo vitae mauris finibus mollis. Donec rutrum, nulla at lacinia congue, nunc ipsum bibendum justo, ac tristique sapien magna nec leo.</p>
        <p>Integer ut odio et ante ultricies auctor. Mauris quis metus sed metus consequat condimentum. Curabitur auctor eleifend magna, ac viverra nulla fermentum sit amet.</p>
      </article>
    );
  };


  
