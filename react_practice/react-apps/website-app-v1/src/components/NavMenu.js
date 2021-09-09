import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { MenuLinks, showMenu, hideMenu } from './MenuElements';
import { useState } from 'react';


function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div>
      <ul className="nav-menu">
        <MenuLinks />
        <li className="nav-signup">
          <button className="signup-btn">
            <Link to='/signup' className="signup-btn">
              Sign Up
            </Link>
          </button>
        </li>
        <li onClick={toggleMenu} className='mobile-menu-container'>
          {!isOpen ? showMenu : hideMenu}
          {isOpen && <div className='mobile-menu'>
            <MenuLinks isMobile />
          </div>}
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
