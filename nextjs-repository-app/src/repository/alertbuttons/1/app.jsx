import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <AlertButtons/>
    </>
  )
};

export default CustomApp;

const AlertButtons = () => {
  const [alertType, setAlertType] = useState(null);

  const showAlert  =(type) => {
    setAlertType(type)
    setTimeout(() => {
        setAlertType(null);
    },3000); // Hide the alert after 3 seconds
  }

  return (
    <>
     <div className="flex justify-center space-x-4 mt-8">
      <button
        onClick={() => showAlert('success')}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Show Success Alert
      </button>
      <button
        onClick={() => showAlert('warning')}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Show Warning Alert
      </button>
      <button
        onClick={() => showAlert('error')}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Show Error Alert
      </button>
      {alertType && (
        <div
          className={`absolute bottom-0 left-0 w-full p-4 bg-${alertType}-500 text-[red] text-center`}
        >
          This is a {alertType} alert!
        </div>
      )}
    </div>
    </>
  );
};
