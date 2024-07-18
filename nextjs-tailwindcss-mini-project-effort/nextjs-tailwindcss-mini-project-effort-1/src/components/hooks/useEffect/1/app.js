"use client"
import { useEffect,useState } from 'react';

const HooksApp = () => {
    const [message, setMessage] = useState('Initial message');

    useEffect(() => {
        // Set up a timeout to change the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            setMessage('Delayed message after 2 seconds')
        },2000)
        // Clean-up function to clear the timeout if the component unmounts or the dependency changes
        return () => {
            clearTimeout(timeoutId)
        }
    },[]); // The empty dependency array means this effect will only run once on mount
  return (
    <div>
      {message}
    </div>
  )
}

export default HooksApp
