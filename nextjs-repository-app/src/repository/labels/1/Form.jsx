import React, { useState } from "react";
import './style.css';

const Form = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
    });
    const [errors,setErrors] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      // Clear error message when user starts typing
      setErrors({
        ...errors,
        [name]:""
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate form fields
      const errors = validateForm(formData);
      if (Object.keys(errors).length === 0) {
        // Form is valid, proceed with submission
        console.log(formData); // handle form submission here
        setSuccessMessage("Form submitted successfully!");
        setSubmittedData(formData); // Store submitted data
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
        });
      } else {
        // Form is invalid, display error messages
        setErrors(errors);
      }
    };
  
    // Function to validate form fields
    const validateForm = (data) => {
      let errors = {};
      if (!data.firstName.trim()) {
        errors.firstName = "First name is required";
      }
      if (!data.lastName.trim()) {
        errors.lastName = "Last name is required";
      }
      if (!data.email.trim()) {
        errors.email = "Email is required";
      } else if (!isValidEmail(data.email)) {
        errors.email = "Invalid email format";
      }
      return errors;
    };
  
    // Function to validate email format
    const isValidEmail = (email) => {
      // Simple email validation using regular expression
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          {/* firstname */}
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName &&  <span className="error">{errors.firstName}</span>}
          </div>
          {/* lastname */}
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName &&  <span className="error">{errors.lastName}</span>}
          </div>
          {/* email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email &&  <span className="error">{errors.email}</span>}
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded-[10px] px-[15px] py-[5px]">Submit</button>
        </form>
        
        {/* Display submitted data */}
        {submittedData && (
          <div>
            <h2>Submitted Data:</h2>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Email: {submittedData.email}</p>
          </div>
        )}
      </>
    );
  };
  

export default Form;
