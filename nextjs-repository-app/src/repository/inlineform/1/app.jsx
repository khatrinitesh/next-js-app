import React from 'react'

const CustomApp = () => {
  return (
    <>
        <InlineForm/>
    </>
  )
}

export default CustomApp

const InlineForm = () => {
    return (
      <form className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
        >
          Submit
        </button>
      </form>
    );
  };