import React from 'react';
import './App.css';
import Greeting from './components/is-logged-in';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting isLoggedIn={false} />
      </header>
    </div>
  );
}

export default App;
