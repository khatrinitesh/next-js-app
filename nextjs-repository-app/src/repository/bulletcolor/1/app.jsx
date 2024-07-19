import React from 'react'

const CustomApp = () => {
  return (
    <>
      <ColoredBulletList/>
    </>
  )
}

export default CustomApp

const ColoredBulletList = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  
    return (
      <ul className="list-disc">
        {items.map((item, index) => (
          <li key={index} className={`text-${index % 5 + 1 === 1 ? 'red' : index % 5 + 1 === 2 ? 'blue' : index % 5 + 1 === 3 ? 'green' : index % 5 + 1 === 4 ? 'yellow' : 'indigo'}-500`}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
