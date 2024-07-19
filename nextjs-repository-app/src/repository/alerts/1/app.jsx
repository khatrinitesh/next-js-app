import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <AlertsBlock type="lime" msg="This is a success message"/>
      <AlertsBlock type="orange" msg="This is a warning message"/>
      <AlertsBlock type="red" msg="This is an  error message"/>
    </>
  )
}

export default CustomApp

const AlertsBlock = ({type,msg}) => {
    const [showAlert,setShowAlert]= useState(true);

    const handleDismiss = () => {
        setShowAlert(false)
    }
    return(
        <>
        {showAlert && (
            <div className={`bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold">Alert:</strong>
            <span className="block sm:inline"> {msg}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleDismiss}>
              <svg className={`fill-current h-6 w-6 text-${type}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.93 2.93a1 1 0 01-1.415-1.414L8.586 10 5.656 7.071a1 1 0 111.415-1.414L10 8.586l2.93-2.929a1 1 0 011.414 1.414L11.414 10l2.934 2.929a1 1 0 010 1.42z"/>
              </svg>
            </span>
          </div>
        )}
        </>
    )
}
