import React from 'react';

const CustomApp = () => {
  return (
    <>
      <Fatnav/>
    </>
  )
}

export default CustomApp

const Fatnav = () => {
    return (
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Add your navigation links or icons here */}
          <div>
            <a href="#" className="mr-4">Link 1</a>
            <a href="#" className="mr-4">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <div>
            {/* Add any additional elements or icons */}
          </div>
        </div>
      </footer>
    );
  };


