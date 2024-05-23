"use client";
import React, { useState, useTransition } from 'react';

const CustomApp = () => {
     // State for form fields and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the field and set the error message
    setFormErrors({
      ...formErrors,
      [name]: value.trim() === '' ? `${name} is required.` : '',
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any remaining errors before submitting
    if (Object.values(formErrors).every((error) => error === '')) {
      // Submit the form data (e.g., send it to the server)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

    
  return (
    <>
      <form  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
      </div>

      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CustomApp
