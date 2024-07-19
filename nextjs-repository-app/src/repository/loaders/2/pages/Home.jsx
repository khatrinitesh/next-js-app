import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const btnNext = () => {
        navigate("/about")
    }
  return (
    <div>Home
        <br />
        <button onClick={btnNext}>Next</button>
    </div>
  )
}

export default Home