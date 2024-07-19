import React, { useState } from 'react';

const CustomApp = () => {
    const [formData,setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setSubmitted(true); // Set the submitted state to true
    }
  return (
    <>
      <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block mb-1">Full Name</label>
          <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">Address</label>
          <input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block mb-1">City</label>
            <input required type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label htmlFor="postalCode" className="block mb-1">Postal Code</label>
            <input required type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>
        <div>
          <label htmlFor="country" className="block mb-1">Country</label>
          <input required type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Submit</button>
      </form>
      {submitted && (<p className="text-green-500 mt-4">Form submitted successfully!</p>)}
    </div>
    </>
  )
}

export default CustomApp
