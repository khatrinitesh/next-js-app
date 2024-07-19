import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Example = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    emailjs.send('service_60pxdoy', 'template_i5spdsn', formData, 'a1u_zKxDNiJ_YgFY0')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after successful submission
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast.error('Failed to send email. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      if (name === 'phone') {
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (numericValue.length > 10) {
          return prevState;
        }
        return { ...prevState, [name]: numericValue };
      }
      return { ...prevState, [name]: value };
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Name is required.');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Email is required.');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Phone number is required.');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Message is required.');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Phone number must be 10 digits.');
      return false;
    }
    return true;
  };


  return (
    <div>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='bg-black px-4 py-2 rounded-[10px] text-white'>Send Email</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Example;
