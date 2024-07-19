import React from 'react'

const CustomApp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Callout type="info">
        This is an informational message.
      </Callout>
      <Callout type="success">
        This is an success message.
      </Callout>
      <Callout type="warning">
        This is an warning message.
      </Callout>
      <Callout type="error">
        This is an error message.
      </Callout>
      <Callout>
        This is a default message.
      </Callout>
    </div>
  )
}

export default CustomApp

const Callout = ({type,children}) => {
    let calloutClasses = 'p-4 rounded';

    switch(type){
        case 'info':
        calloutClasses += ' bg-blue-100 text-blue-800';
        break;
        case 'success':
        calloutClasses += ' bg-green-100 text-green-800';
        break;
        case 'warning':
        calloutClasses += ' bg-yellow-100 text-yellow-800';
        break;
        case 'error':
        calloutClasses += ' bg-red-100 text-red-800';
        break;
        default:
        calloutClasses+= 'bg-gray-100 text-gray-800';
    }

    return(
        <>
         <div className={calloutClasses}>
            {children}
         </div>
        </>
    )
}
