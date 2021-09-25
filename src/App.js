import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <h1>Hola Niños este es un obsequio!</h1>>

      <ReactPlayer
        url='https://youtu.be/E9Pf7kGqE3c'
        
        controls
        playing
        volume='0.5'
    />
    </div>
  );
}

export default App;
