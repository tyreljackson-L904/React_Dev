import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MenuItems } from './NavbarElements';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

export const menuLinks = MenuItems.map((item, index) => {

  return <li key={index}>
      <Link exact to={item.url} className={item.cName}>
        {item.title}
      </Link>
  </li>
});

export const showMenu =  <FiMenu className = 'hamburger-menu-icon' /> 
export const hideMenu = <IoMdClose className='close-menu-icon' /> 