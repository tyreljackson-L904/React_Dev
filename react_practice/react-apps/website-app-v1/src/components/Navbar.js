import React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MenuItems from './NavbarElements'

function Navbar() {
  return (
    <Router>
      <Switch>
        <Route>
          <div className='navbar'>
            <div className="nav-left">
              <h2 className='navbar-title'>
                WeeCode
              </h2>
            </div>
            <div className="nav-right">
              <ul className="nav-menu">
                {MenuItems.map((item) => {
                  return <li>
                    <Link to={item.url} className={item.cName}>
                      {item.title}
                    </Link>
                  </li>
                })}  
                <li className="nav-signup">
                  <Link to='/sign-up'>
                    <button className="signup-btn">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar
