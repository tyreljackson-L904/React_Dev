import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Features from "./components/pages/features";
import Connect from "./components/pages/connect";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/features" component={Features} />
          <Route path="/connect" component={Connect} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
