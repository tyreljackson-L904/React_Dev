import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MenuItems } from './NavbarElements';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

function NavMenu() {
  const [menuIcon, setMenuIcon] = useState(false);

  const toggleMenu = () => {
      setMenuIcon(!menuIcon)
  }

  const menuLinks = MenuItems.map((item, index) => {
    return <li key={index}>
      <Route to={item.url}>
        <Link exact to={item.url} className={item.cName}>
          {item.title}
        </Link>
      </Route>
    </li>
  });

  return (
    <div>
      <ul className="nav-menu">
        {menuLinks}
        <li className="nav-signup">
          <Link to='/sign-up'>
            <button className="signup-btn">
              Sign Up
            </button> 
          </Link>
        </li>
        <li className="menu-btn" onClick={toggleMenu}>
          {menuIcon ? 
            <IoMdClose className='close-menu-icon' />
            :
            <FiMenu className='hamburger-menu-icon' />
          }
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
