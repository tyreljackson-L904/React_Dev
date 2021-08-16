import React from 'react';
import './App.css';
// import Greeting from './components/is-logged-in';
import Greeting from './components/Greeting';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting isLoggedIn={true} /> */}
        <Greeting  />
      </header>
    </div>
  );
}

export default App;
