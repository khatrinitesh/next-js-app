import React from 'react';
import {useNavigate} from 'react-router-dom';

const WebpageTwo = () => {
    const navigate = useNavigate();

    const handle = () => {
        navigate('/')
    }
  return (
    <div>
        <span className='font-bold text-[30px]'>WebpageTwo</span>
        <br />
        <button onClick={handle}>Click next webpage 1</button>
    </div>
  )
}

export default WebpageTwo