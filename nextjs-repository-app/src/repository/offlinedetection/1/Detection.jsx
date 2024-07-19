import React, { useState, useEffect } from 'react';

const Detection = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
          setIsOnline(true);
        };
    
        const handleOffline = () => {
          setIsOnline(false);
        };
    
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
    
        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
        };
      }, []);
  return (
    <div>
        <h1>{isOnline ? 'Online' : 'Offline'}</h1>
    </div>
  )
}

export default Detection