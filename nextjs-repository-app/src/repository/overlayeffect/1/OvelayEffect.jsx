import React from "react";

const OvelayEffect = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            {/* Content of the overlay */}
            <div>
              <h2 className="text-xl font-bold mb-4">Overlay Content</h2>
              <p>This is the content of the overlay.</p>
            </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OvelayEffect;
