import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { menuLinks, showMenu, hideMenu } from './MenuElements';
import { useState } from 'react';


function NavMenu() {
  const [menuIcon, setMenuIcon] = useState(false);

  const toggleMenu = () => {
      setMenuIcon(!menuIcon)
  }

  if (menuIcon) {
    return <li style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      fontSize: '20px',
      top: '80px',
      right: '100px',
      color: 'black',
      textDecoration: 'none',
      backgroundColor: 'gray' 
   }}>
      {hideMenu}{menuLinks}
      </li>
  } 

  return (
    <div>
      <ul className="nav-menu">
        {menuLinks}
        <li className="nav-signup">
          <button className="signup-btn">
            <Link to='/signup' className="signup-btn">
              Sign Up
            </Link>
          </button>
        </li>
        <li onClick={toggleMenu}>
          {!menuIcon ? showMenu : hideMenu}
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
