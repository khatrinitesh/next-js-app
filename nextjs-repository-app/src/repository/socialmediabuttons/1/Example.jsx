import React, { useEffect, useState } from "react";

const Example = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 20) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <FacebookButton/>
      <TwitterButton/>
      <InstagramButton/>
    </>
  );
};

export default Example;


function FacebookButton() {
    return (
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Facebook
      </a>
    );
}
  
function TwitterButton() {
    return (
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Twitter
        </a>
    );
}

function InstagramButton() {
    return (
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Instagram
        </a>
    );
}