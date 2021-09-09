import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './NavbarElements';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import cx from 'classnames';

export const MenuLinks = (props) => {
  return MenuItems.map((item, index) => {
     return <li key={index}>
      <Link exact to={item.url} className={cx(item.cName, {'nav-mobile': props.isMobile})}>
        {item.title}
      </Link>
    </li>
  });
}

export const showMenu =  <FiMenu className = 'hamburger-menu-icon' /> 
export const hideMenu = <IoMdClose className='close-menu-icon' /> 