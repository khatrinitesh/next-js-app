"use client"
import { useState } from "react"

const HooksApp = () => {

    const initialState = 0
    const [count,setCount] = useState(initialState)

    const handleInc = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDec = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
  return (
    <div>
      {count}
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleReset}>REse</button>
    </div>
  )
}

export default HooksApp
