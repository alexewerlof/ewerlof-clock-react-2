import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Motor from './Motor'
import Face from './Face'
import Hour from './Hour'
import Minute from './Minute'
import Second from './Second'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Motor>
          <Face></Face>
          <Hour></Hour>
          <Minute></Minute>
          <Second></Second>
        </Motor>
      </div>
    );
  }
}

export default App;
