import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <h1>Hola Matín 😎 este es un obsequio para tí!</h1>
      <h2>Me encantó tu video ♥</h2>

      <ReactPlayer
        url='https://youtu.be/E9Pf7kGqE3c'
        controls
        volume='0.5'
    />
    </div>
  );
}

export default App;
