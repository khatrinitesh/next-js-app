
"use client"
import {useState} from 'react'

const ConditionalRendering = () => {
    const [isHappy, setIsHappy] = useState(true);

    const handleClick = () => {
        setIsHappy(prevState => !prevState);
      };
  return (
    <div>
      {isHappy ? 'happy' : 'sad'}
      <button className="bg-[red]" onClick={handleClick}>{isHappy ? 'click' : 'clicked'}</button>
    </div>
  )
}

export default ConditionalRendering
