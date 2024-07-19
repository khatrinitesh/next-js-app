import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavarIcons = () => {
  return (
    <>
      <nav className="navbar">
      <ul className='flex items-center'>
        <li className='items-center flex'><FontAwesomeIcon className="text-white" icon={faHome} /><span>Home</span></li>
        <li className='items-center flex'><FontAwesomeIcon className="text-white" icon={faUser} /><span>About</span></li>
        <li className='items-center flex'><FontAwesomeIcon className="text-white" icon={faCog} /><span>Settings</span></li>
        <li className='items-center flex'><FontAwesomeIcon className="text-white" icon={faEnvelope} /><span>Contact</span></li>
      </ul>
    </nav>
    </>
  )
}

export default NavarIcons
