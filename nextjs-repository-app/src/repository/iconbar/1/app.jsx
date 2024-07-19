import React from 'react';

const CustomApp = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Icon Bar Example</h1>
      <IconBar />
    </div>
  )
}

export default CustomApp

const IconBar = () => {
    return (
      <div className="flex justify-center space-x-4">
        {/* 1 */}
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </a>

        {/* 2 */}
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l-4-4m0 0l-4 4m4-4V4" />
          </svg>
        </a>

        {/* 3 */}
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l4-4m0 0l4 4m-4-4v8" />
          </svg>
        </a>
      </div>
    );
  };
  