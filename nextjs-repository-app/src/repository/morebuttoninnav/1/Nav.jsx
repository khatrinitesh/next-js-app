import React,{useState} from 'react'

const Nav = ({ navItems }) => {
    const [showMore, setShowMore] = useState(false);
  
    const toggleMore = () => {
      setShowMore(!showMore);
    };
  
    return (
      <nav className="navbar">
        <ul className="nav-items">
          {navItems.slice(0, showMore ? navItems.length : 3).map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
          {!showMore && (
            <li className="nav-item">
              <button onClick={toggleMore}>More</button>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  export default Nav;
