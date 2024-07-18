'use client';
import { useState } from 'react';

const FunctionalCompWithState = () => {
    const [count,setCount] = useState(0)

    const handleInc = () => {
        setCount((prev) => prev + 1)
    }
  return (
    <div>
      Count: {count}
      <button onClick={handleInc}>Click</button>
    </div>
  )
}

export default FunctionalCompWithState
