import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './NavMenu';

function Navbar() {
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
              <NavMenu />
            </div>
          </nav>
          
        </Route>
      </Switch>
    </Router>
  )
}

                
export default Navbar
