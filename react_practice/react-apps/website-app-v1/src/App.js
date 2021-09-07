import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Features from './components/pages/features';
import Contact from './components/pages/contact';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/features' component={Features} exact />
          <Route path='/contact' component={Contact} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
