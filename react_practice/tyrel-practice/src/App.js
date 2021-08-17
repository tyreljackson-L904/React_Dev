import React from 'react';
import './App.css';
// import Greeting from './components/is-logged-in';
import Greeting from './components/Greeting';
import Button from './components/Button';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting isLoggedIn={true} /> */}
        <Greeting  name="Tyrel"/>
        <Button title="Change"/>
      </header>
    </div>
  );
}

export default App;
