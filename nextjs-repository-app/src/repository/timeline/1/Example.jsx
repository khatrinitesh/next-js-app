import React from 'react';
// import "./style.css";

const Example = ({events}) => {
    
  return (
    <>
    {events.map((event,index) => (
        <TimelineItem key={index} date={event.date} description={event.description}/>
    ))}
    </>
  );
};

export default Example;

const TimelineItem = ({ date, description }) => {
    return (
      <div className="flex mb-6">
        <div className="flex-shrink-0 mr-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
            {date}
          </div>
        </div>
        <div className="flex-grow">
          <div className="font-bold">{date}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  };
  
