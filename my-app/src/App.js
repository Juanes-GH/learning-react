import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <nav className= "navbar navbar-dark bg-dark">
      <a className='text-white'>task</a>
      </nav>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
