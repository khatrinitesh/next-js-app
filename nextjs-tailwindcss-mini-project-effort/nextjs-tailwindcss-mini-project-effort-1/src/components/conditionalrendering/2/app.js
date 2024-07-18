"use client"
import {useState} from 'react'


const ConditionalRendering = () => {
    const [text,setText] = useState('test');
    const happy = true;

    const handleToggle = () => {
        setText(happy !== text ? 'Happy Text' : 'Sad Text');
    }
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleToggle}>Click me</button>
    </div>
  )
}

export default ConditionalRendering
