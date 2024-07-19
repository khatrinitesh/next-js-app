import React,{useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiPlus, FiHome, FiSettings, FiMessageCircle } from 'react-icons/fi';

const CustomApp = () => {
  return (
    <>
      <CircleMenu/>
    </>
  )
}

export default CustomApp

const CircleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="fixed bottom-8 right-8">
        <button
          className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md"
          onClick={toggleMenu}
        >
          <FiPlus size={24} />
        </button>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-0"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-0"
        >
          {(ref) => (
            <div
              ref={ref}
              className="absolute flex flex-col items-center space-y-4"
            >
              <MenuItem icon={<FiHome size={24} />} />
              <MenuItem icon={<FiSettings size={24} />} />
              <MenuItem icon={<FiMessageCircle size={24} />} />
            </div>
          )}
        </Transition>
      </div>
    );
  };

  
  const MenuItem = ({ icon }) => {
    return (
      <button className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md">
        {icon}
      </button>
    );
  };