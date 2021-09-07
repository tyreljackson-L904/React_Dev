import React from 'react';
import './Navbar.css'
import { BrowserRouter as Link } from 'react-router-dom';
import NavMenu from './NavMenu';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="nav-left navbar-title">
        <Link to='/'>
          Wee{'{Code}'}
        </Link>
      </div>

      <div className="nav-right"> 
        <NavMenu />
      </div>
    </nav>
  )
}

                
export default Navbar
