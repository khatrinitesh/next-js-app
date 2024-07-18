import React from 'react';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const CustomApp = () => {
  return (
    <>
        <Navbar />
    </>
  )
}

export default CustomApp

const Navbar = () => {

    const navbar= [
        {id:1,icon:<FaHome/>,text:'Home'},
        {id:2,icon:<FaUser/>,text:'About'},
        {id:3,icon:<FaEnvelope/>,text:'Contact'}
    ]
    return (
      <nav>
        <ul className="flex flex-column items-center justify-center text-center">
            {navbar.map((val,id) => {
                return(
                    <li className={`${id !== navbar.length - 1 ? 'mr-6' : ''}`}> 
                    <Link target="_blank" href="https://www.youtube.com/" className={`text-center flex justify-center items-center flex-col`}>
                        <span class="m-auto text-center text-[red]">{val.icon}</span>
                        <span>{val.text}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
      </nav>
    );
  };


