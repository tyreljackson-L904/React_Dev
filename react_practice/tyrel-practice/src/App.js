import React from 'react';
import './App.css';
import Counter from './components/Counter'
import Greeting from './components/Greeting'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting isLoggedIn={true} /> */}
        <Greeting  name="Tyrel"/>
        <Counter count={0}/>
      </header>
    </div>
  );
}

export default App;
