"use client"
import React from 'react';
import './style.css';

const UserData = [
    {name: 'John', avatar: '' },
    {name: 'Jane', avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' },
    {name: 'Bob', avatar: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' },
  ];

const CustomApp = () => {
  return (
    <>
    <div className='flex justify-center'>
        {UserData.map((user,index) => {
            const {name,avatar} = user;
            return(
                <div key={index}>
                    <h3>{name}</h3>
                    {user.avatar ? (<img src={user.avatar}/>) : (<p> no avatar available</p>)}
                </div>
            )
        })}
      </div>
    </>
  )
}

export default CustomApp