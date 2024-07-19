import React from 'react'

const CustomApp = () => {
    const handleButtonClick1 = () => {
        console.log('Button 1 clicked');
      };
    
      const handleButtonClick2 = () => {
        console.log('Button 2 clicked');
      };

      const buttons = [
        { label: 'Button 1', onClick: handleButtonClick1 },
        { label: 'Button 2', onClick: handleButtonClick2 },
      ];
    
  return (
    <div>
      <ButtonGroup buttons={buttons}/>
    </div>
  )
}

export default CustomApp

const ButtonGroup = ({ buttons }) => {
    return (
      <div className="flex space-x-4">
        {buttons.map((val, index) => {
            const {label,onClick} = val
            return(
                <>
                <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={onClick}
                >
                    {label}
                </button></>
            )
        }
        )}
      </div>
    );
  };
