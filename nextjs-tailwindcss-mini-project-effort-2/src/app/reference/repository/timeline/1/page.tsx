import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
     <Timeline/> 
    </>
  )
}

export default CustomApp


const Timeline = () => {
    const timelineData = [
      {
        date: 'January 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'February 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'January 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'February 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'January 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'February 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'January 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'February 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'January 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'February 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'January 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        date: 'February 2018',
        content:
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      // ... Add more data for each timeline entry
    ];
  
    return (
      <div>
        <h1>Responsive vertical timeline</h1>
        <div className="timeline">
          <ul>
            {timelineData.map((item, index) => (
              <li key={index}>
                <div className="content">
                  <h3>What is Lorem Ipsum?</h3>
                  <p>{item.content}</p>
                </div>
                <div className="time">
                  <h4>{item.date}</h4>
                </div>
              </li>
            ))}
            <div style={{ clear: 'both' }}></div>
          </ul>
        </div>
      </div>
    );
  };
  