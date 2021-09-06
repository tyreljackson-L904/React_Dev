import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MenuItems } from './NavbarElements';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }


  const menuLinks = MenuItems.map((item, index) => {
    return <li key={index}>
      <Link to={item.url} className={item.cName}>
        {item.title}
      </Link>
    </li>
  })

  // hamburger menu initial state
  // click hamburger menu
  // set state to opposite value of current click
  // x close icon shows with menu links dropdown

 
  
  return (
    <Router>
      <Switch>
        <Route>
          <nav className='navbar'>
            
            <div className="nav-left">
              <h2 className='navbar-title'>
                WeeCode
              </h2>
            </div>

            <div className="nav-right"> 
              <ul className="nav-menu">
                {menuLinks}
                <li className="nav-signup">
                  <Link to='/sign-up'>
                    <button className="signup-btn">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

          </nav>
        </Route>
      </Switch>
    </Router>
  )
}


{/* <button className="menu-icon" onClick={handleClick}>
                  { click ? menuLinks : hiddenMenu }
</button> */}
                
export default Navbar
