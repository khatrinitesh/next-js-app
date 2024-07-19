import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div>About
        <br />
        <button onClick={btnBack}>Back</button>
    </div>
  )
}

export default About