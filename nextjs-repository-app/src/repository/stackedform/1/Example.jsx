import React, { useEffect, useState } from "react";

const Example = () => {
    const [formData, setFormData] = useState({
        firstName: '', // 1
        lastName: '', // 2
        email: '', // 3
        message: '' // 4
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
      };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* fname 1 */}
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      {/* lname 2 */}
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      {/* email 3 */}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      {/* message 4 */}
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      {/* btn submitt */}
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Example;
