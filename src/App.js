import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BookDisplay from './my-app/BookDisplay';
import Music from './my-app/Music';
import Cooks from './my-app/Cooks';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <BookDisplay />
      </div>
      <div className="App">
        <Music />
      </div>
      <div className="App">
        <Cooks />
      </div>
      
      </>
    );
  }
}



export default App;