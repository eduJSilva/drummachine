import React from 'react';
import logo from './logo.svg';
import { Counter} from './features/counter/Counter';
import './App.css';
import {useEffect} from 'react';

let counter = new Counter();

function App() {
  useEffect(() =>{
    document.addEventListener('keydown', counter.detectKeyDown, true)}, []);

   

  return (
    <div className="App">    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Drum Machine</h1> 
        <Counter/>
      </header>
    </div>
  );
}

export default App;
