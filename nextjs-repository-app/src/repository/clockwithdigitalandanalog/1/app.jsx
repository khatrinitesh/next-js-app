import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return (
    <>
    <Clock/>
    </>
  )
};

export default CustomApp;

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour12: false });
  };

  const calDeg = (unit, max) => {
    return (unit / max) * 360;
  };

  // Calculate angles for hour, minute, and second hands
  const secondsAngle = calDeg(time.getSeconds(), 60);
  const minutesAngle = calDeg(time.getMinutes(), 60);
  const hoursAngle =
  calDeg(time.getHours() % 12, 12) + minutesAngle / 12;
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="text-6xl mb-4">{formatTime(time)}</div>
          <div className="relative w-40 h-40">
            {/* Analog clock */}
            <div className="absolute w-full h-full transform -rotate-90">
              {/* Hour hand */}
              <div
                className="absolute bg-black w-1/2 h-20 transform -translate-x-1/4 -translate-y-10 origin-bottom"
                style={{ transform: `rotate(${hoursAngle}deg)` }}
              />
              {/* Minute hand */}
              <div
                className="absolute bg-black w-1/3 h-28 transform -translate-x-1/6 -translate-y-14 origin-bottom"
                style={{ transform: `rotate(${minutesAngle}deg)` }}
              />
              {/* Second hand */}
              <div
                className="absolute bg-red-500 w-1/4 h-32 transform -translate-x-1/8 -translate-y-16 origin-bottom"
                style={{ transform: `rotate(${secondsAngle}deg)` }}
              />
              {/* Clock face */}
              <div className="absolute w-4 h-4 bg-black rounded-full transform -translate-x-2 -translate-y-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
