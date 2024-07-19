import React, { useState, useEffect } from "react";
// import "./style.css";

const Example = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const words = ['Hello', 'World', 'React', 'Tailwind', 'CSS'];
  
    useEffect(() => {
      const typingSpeed = 100; // Typing speed in milliseconds
      const deletingSpeed = 50; // Deleting speed in milliseconds
      const delay = 2000; // Delay between typing and deleting in milliseconds
  
      const handleTyping = () => {
        const currentWord = words[currentIndex];
        const currentText = text;
  
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setText(currentWord.substring(0, currentText.length + 1));
          } else {
            setIsDeleting(true);
            setTimeout(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length), delay);
          }
        } else {
          if (currentText.length > 0) {
            setText(currentText.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
          }
        }
      };
  
      const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
  
      return () => clearInterval(typingInterval);
    }, [text, currentIndex, isDeleting, words]);
  return (
    <>
      <div className="text-center py-8">
      <h1 className="text-4xl font-bold">{text}</h1>
    </div>
    </>
  )
};

export default Example;
