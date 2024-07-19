import React, { useState } from 'react'

const CustomApp = () => {
    
  return (
    <>
     <ContactForm/> 
    </>
  )
}

export default CustomApp

const ContactForm = ({}) => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        // Clear the error message when user starts typing
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        // Validation
        if (!formData.name.trim()) {
          errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) {
          errors.message = 'Message is required';
        }
    
        if (Object.keys(errors).length === 0) {
          // Form is valid, handle submission
          // For demo, just show success message
          setSuccessMessage('Message sent successfully!');
          // Reset the form
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          // clear any previous errors
          setFormErrors({});
        } else {
          setFormErrors(errors);
          // If there are errors, hide the success message
          setSuccessMessage('');
        }
      };
    return(
        <>
            <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Name"
          />
          {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com"
          />
          {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your message..."
          ></textarea>
          {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
        </>
    )
}