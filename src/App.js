import logo from './logo.svg';  
import './App.css';
import { Counters } from './features/counter/Counter';

function App() {

  return (
    <div className="App">    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Drum Machine</h1> 
        <Counters />
      </header>
    </div>
  );
}

export default App;
