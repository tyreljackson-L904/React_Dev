import logo from './logo.svg';
import './App.css';

//create components with capital letter
// const Greeting = (props) => { // for function components use 'props'!!!!
//   return (
//     <div>
//       <p>{props.greet} {props.name}</p>
//     </div>
//   );
// }

// const GreetAll = (props) => {
//   return (
//     <div>
//       {props.names.map(item => <Greeting greet={props.greeting} name={item} /> )}
//     </div>
//   )
// }

// const WorkWeek = (props) => {
//   return (
//     <div>
//       {props.greet} {props.names} 
//     </div>
//   )
// }

const UserGreeting = (props) => {
  return <h1>Welcome Back!</h1>
}

const GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>
}

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting isLoggedIn={true}/>
        {/* <Greeting greet="Hello, " name="Talladega"/>
        <GreetAll greeting="Goodbye, " names={["names", "othername", "anothername"]} />
        <WorkWeek greet="Hello" names="Bobby" /> */}
      </header>
    </div>
  );
}

export default App;
