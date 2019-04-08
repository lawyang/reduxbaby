import React, { Component } from 'react';
import './App.css';
import Parent from './components/Pages/Parent';
import Router from 'react-router-component';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Parent />
      </div>
    );
  }
}

export default App;
