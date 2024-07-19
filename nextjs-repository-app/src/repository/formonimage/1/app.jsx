import React from 'react'

const CustomApp = () => {
  return (
    <>
    <FormOnImage/>
    </>
  )
}

export default CustomApp

const FormOnImage = () => {
    return (
      <div className="relative flex items-center justify-center h-full">
        <img src="https://images.unsplash.com/photo-1500423079914-b65af272b8db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzQ0NTA3fHxlbnwwfHx8fHw%3D" alt="Background" className="w-full h-screen" />
        <form className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    );
  };