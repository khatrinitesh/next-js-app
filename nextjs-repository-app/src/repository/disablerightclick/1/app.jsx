import React, { useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
      <DisableRightClick/>
    </>
  )
}

export default CustomApp

const DisableRightClick   =() => {
    useEffect(() => {
        const disableRightClick = (e) => {
            e.preventDefault();
            alert('clicked right is not allowed')
        }
        document.addEventListener('contextmenu',disableRightClick)
        return () => {
            document.addEventListener('contextmenu',disableRightClick)
        };
    },[]);

    return <></> // This component doesn't render anything, it just handles the logic
}
