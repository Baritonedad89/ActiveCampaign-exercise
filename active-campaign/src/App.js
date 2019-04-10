import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import GridWrapper from './GridWrapper';
import Collections from './Collections';
import ContactDetail from './ContactDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
