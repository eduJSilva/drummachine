//import React, {useEffect}from 'react';
import logo from './logo.svg';
import { Counter} from './features/counter/Counter';
import './App.css';

let counter = new Counter();

function App() {
  /*
   let detectKeyDown = (e) => {
      let letters = counter.keys;
      for (let letra of letters) {
        if (letra === e.key.toUpperCase()) {
          console.log(letra);
          let audio = new Audio(counter.state.padSounds[letra]);
          return  audio.play()
        }
        else {}
      }
    };

    useEffect(()=>{document.addEventListener("keydown", detectKeyDown, true)}, [])
   */

  return (
    <div className="App" onKeyPress={counter.handleKeyPress}>    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Drum Machine</h1> 
        <Counter />
      </header>
    </div>
  );
}

export default App;
