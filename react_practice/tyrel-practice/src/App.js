import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter'


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
