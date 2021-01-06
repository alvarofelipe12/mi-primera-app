import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';
import Button from 'react-bootstrap/Button';

function App() {
  const username = "Felipe Garcia";
  const age = 26;
  const user = {
    name: "Felipe Garcia",
    age: 26,
    color: "Blue"
  };
  const saludarFn = name => {
    console.log(`Hi ${name}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary" onClick={() => console.log('Hi')}>Primary</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <AdiosMundo />
        <Saludar name={username} age="29" />
        <Saludar name="Paco" age={age} />
        <Saludar userInfo={user} saludarFn={saludarFn} />
        </header>
    </div>
  );
}

export default App;
