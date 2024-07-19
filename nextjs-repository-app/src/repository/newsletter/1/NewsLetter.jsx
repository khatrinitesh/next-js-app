import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit email to backend service
        console.log('Email submitted:', email);
        // Clear the input field
        setEmail('');
      };
  return (
    <>
     <form onSubmit={handleSubmit} className="newsletter-form">
      <h2>Subscribe to our Newsletter</h2>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form> 
    </>
  )
}

export default NewsLetter
