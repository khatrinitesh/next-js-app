"use client"
import {useState} from 'react'

const ConditionalRendering = () => {
    const [text,setText] = useState('test')
    const happy = true
    const handleClick  =() => {
        // Toggle the text based on the current state
        setText(prevText => (prevText === 'test' ? String(!happy) : 'test'));
    }
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ConditionalRendering
