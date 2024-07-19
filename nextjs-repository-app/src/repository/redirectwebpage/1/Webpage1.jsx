import React from 'react';
import {useNavigate} from 'react-router-dom';


const WebpageOne = () => {
    const navigate = useNavigate();

    const handle = () => {
        navigate('/webpage2')
    }
  return (
    <div>
        <span className='font-bold text-[30px]'>WebpageOne</span>
        <br />
        <button onClick={handle}>Click next webpage2</button>
    </div>
  )
}

export default WebpageOne