import React, { useEffect, useState } from 'react'

const CustomApp = () => {
  return (
    <>
     <CountDownTimer initialSeconds={3600} /> 
    </>
  )
}

export default CustomApp

const CountDownTimer = ({initialSeconds }) => {

    const seconds = UseCountDown(initialSeconds);

    // Format seconds into hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // Add leading zeroes if necessary
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return(
        <>
         <div className="text-center">
            <div className="text-3xl font-bold mb-4">
                {formattedHours}:{formattedMinutes}:{formattedSeconds}
            </div>
            Deserunt tempor laboris elit dolore dolor. Officia ad laboris et deserunt nulla sit adipisicing sit. Voluptate consectetur voluptate veniam Lorem voluptate. Et aliquip aliquip aliquip eiusmod pariatur do cupidatat cupidatat. Laboris dolore ad mollit eu consequat eu mollit deserunt tempor Lorem irure. Nisi do ipsum nostrud velit id id qui culpa sint et.
        </div>
        </>
    )
}


const UseCountDown = (initialSeconds) => {
    const [seconds,setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const countDown = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1)
        },1000);
        return () => clearInterval(countDown)
    },[])
    

    return seconds;
}