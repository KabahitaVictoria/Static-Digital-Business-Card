import React from 'react';
import { Info } from './components/Info';
import { About } from './components/About';
import './App.css'
import { Social } from './components/Social';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Social />
    </div>
  )
}

export default App
