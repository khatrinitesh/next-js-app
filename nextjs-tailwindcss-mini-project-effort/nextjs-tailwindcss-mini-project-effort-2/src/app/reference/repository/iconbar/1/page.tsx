"use client";

import { useState } from 'react';

const CustomApp = () => {

    const {icons,toggleIcon} = useIconBar();
    
  return (
    <div>
      <ul>
        {icons.map((icon) => {
            return(
                <li key={icon.id} style={{color:icon.isActive ? 'blue' : 'black'}} onClick={() => toggleIcon(icon.id)}>
                    {icon.name}
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default CustomApp

const useIconBar = () => {
    const [icons,setIcons] = useState([
        { id: 1, name: 'Icon1', isActive: false },
    { id: 2, name: 'Icon2', isActive: false },
    { id: 3, name: 'Icon3', isActive: false },
    // add more icons as needed
    ])

    const toggleIcon = (iconId) => {
        setIcons((prevIcons) =>
          prevIcons.map((icon) =>
            icon.id === iconId ? { ...icon, isActive: !icon.isActive } : icon
          )
        );
      };
    return {icons,toggleIcon}
}
